// pages/api/career.js
import { query } from "@/lib/query";

export default async function handler(req, res) {
  try {
    const result = await query(`
          SELECT
        "Id" AS "JobId",
        "Title",
        "Description",
        "Location",
        "CreatedDate",
        "NoOfPosition",
        "Status",
        "StartDate",
         "EndDate",
         "ExperienceMin",
         "ExperienceMax"
      FROM public."JobPositions"
      WHERE
  "IsDeleted" = false
  AND (
        "EndDate" IS NULL
        OR "EndDate" >= CURRENT_DATE
      )
ORDER BY "CreatedDate" DESC
LIMIT 3;
    `);

    return res.status(200).json({
      success: true,
      data: result.rows
    });
  } catch (err) {
    console.error("Database Error:", err);
    return res.status(500).json({
      success: false,
      error: "Database Error"
    });
  }
}
