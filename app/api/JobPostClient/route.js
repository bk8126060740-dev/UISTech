// app/api/jobpostclient/route.js
import { query } from "@/lib/query";

export async function GET() {
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
LIMIT 20;

    `);

    return new Response(
      
      JSON.stringify({ success: true, data: result.rows }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Database Error" }),
      { status: 500 }
    );
  }
}
