import multer from "multer";
import path from "path";
import fs from "fs";
import { pool } from "@/lib/query";

export const config = { api: { bodyParser: false } };

/* ================= UPLOAD CONFIG ================= */
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF allowed"));
  },
});

/* ================= MIDDLEWARE RUNNER ================= */
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) reject(result);
      resolve(result);
    });
  });

/* ================= DOB NORMALIZER (🔥 IMPORTANT) ================= */
function normalizeDob(dob) {
  if (!dob || typeof dob !== "string") return null;

  const value = dob.trim();
  if (!value) return null;

  // Case 1: YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  // Case 2: DD/MM/YYYY or DD-MM-YYYY
  if (/^\d{2}[\/-]\d{2}[\/-]\d{4}$/.test(value)) {
    const [dd, mm, yyyy] = value.split(/[\/-]/);
    return `${yyyy}-${mm}-${dd}`;
  }

  // Case 3: ISO or other parseable formats
  const d = new Date(value);
  if (!isNaN(d.getTime())) {
    return d.toISOString().slice(0, 10);
  }

  return null; // invalid format
}

/* ================= API HANDLER ================= */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const client = await pool.connect();

  try {
    await runMiddleware(req, res, upload.single("resumefile"));

    const {
      userId,
      firstName,
      lastName,
      fatherName,
      dob,
      gender,
      email,
      mobileNumber
    } = req.body;

    // 🔴 Required field check
    if (!userId || !firstName || !lastName || !email || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    const resumeFile = req.file.filename;
    const normalizedDob = normalizeDob(dob);

    await client.query("BEGIN");

    /* ========= 1️⃣ INSERT CANDIDATE ========= */
    const candidateRes = await client.query(
      `
      INSERT INTO public."Candidates"
      (
        "IsDeleted",
        "CreatedDate",
        "Status",
        "UserId",
        "FirstName",
        "LastName",
        "MidName",
        "DOB",
        "Gender",
        "Email",
        "MobileNumber",
        "UploadResume",
        "TDOJ",
        "IsRailwayRetired"
      )
      VALUES
      (
        false,
        NOW(),
        1,
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        NOW(),
        false
      )
      RETURNING "Id", "UserId"
      `,
      [
        Number(userId),
        firstName,
        lastName,
        fatherName || null,
        normalizedDob,          // ✅ SAFE DATE or NULL
        Number(gender),
        email,
        mobileNumber,
        resumeFile
      ]
    );

    const candidateId = candidateRes.rows[0].Id;

    /* ========= 2️⃣ INSERT ADDRESS ========= */
    await client.query(
      `
      INSERT INTO public."CandidateContactInfos"
      (
        "CandidateId",
        "ContactType",
        "IsDeleted",
        "CreatedDate"
      )
      VALUES
      ($1, 1, false, NOW())
      `,
      [candidateId]
    );

    /* ========= 3️⃣ INSERT QUALIFICATION ========= */
    await client.query(
      `
      INSERT INTO public."CandidateQualifications"
      (
        "CandidateId",
        "QualificationTypeId",
        "Institution",
        "StartDate",
        "EndDate",
        "IsDeleted",
        "CreatedDate"
      )
      VALUES
      ($1, 3, 'ABC College', '2015-06-01', '2018-06-01', false, NOW())
      `,
      [candidateId]
    );

    await client.query("COMMIT");

    return res.status(200).json({
      success: true,
      message: "Candidate applied successfully",
      data: {
        CandidateId: candidateId,
        UserId: candidateRes.rows[0].UserId
      }
    });

  } catch (error) {
    await client.query("ROLLBACK");
    console.error("API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  } finally {
    client.release();
  }
}
