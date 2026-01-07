import fs from "fs";
import path from "path";

export default function handler(req, res) {

  // ✅ Only GET allowed
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { file } = req.query;

  // ✅ File name required
  if (!file) {
    return res.status(400).json({ message: "File required" });
  }

  // ✅ Security: path traversal protection
  if (file.includes("..") || file.includes("/") || file.includes("\\")) {
    return res.status(400).json({ message: "Invalid file name" });
  }

  // ✅ CORRECT PATH (public/uploads)
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadsDir, file);

  // ✅ File existence check
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  // ✅ Headers for PDF download / view
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${file}"`
  );

  // ✅ Stream file
  fs.createReadStream(filePath).pipe(res);
}
