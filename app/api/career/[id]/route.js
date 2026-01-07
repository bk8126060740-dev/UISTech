// app/api/admin/jobs/route.js
import { responseHandle } from "@/common/adminApi/apiHandler";
import { query } from "@/lib/query";

// /* GET: All jobs (Admin) */
// export async function GET() {
//   try {
//     const result = await query(`
//      SELECT
//         "Id" AS "JobId",
//         "Title",
//         "Description",
//         "Location",
//         "CreatedDate",
//         "NoOfPosition",
//         "Status",
//         "StartDate",
//          "EndDate",
//          "ExperienceMin",
//          "ExperienceMax"
//       FROM public."JobPositions"
//       WHERE "IsDeleted" = false
//       ORDER BY "CreatedDate" DESC
//     `);
    
//     return responseHandle(result.rows, 200, "Jobs fetched", true);
   
//   } catch (error) {
//     return responseHandle(null, 500, error.message, false);
//   }
// }

/* POST: Create job (Admin) */
export async function POST(req) {
  try {
    const body = await req.json();
    const { Title, Location } = body;

    await query(
      `
     INSERT INTO public."JobPositions"
(
  "Title",
  "Location",
  "IsDeleted",
  "CreatedDate",
  "ProjectId",
  "NoOfPosition",
  "CTCMin",
  "CTCMax",
  "PositionFilled",
  "ExperienceMin",
  "ExperienceMax",
  "Description",
  "Role",
  "StartDate",
  "EndDate",
  "Status"
)
VALUES
(
  $1,     -- Title
  $2,     -- Location
  false,  -- IsDeleted (fixed)
  NOW(),  -- CreatedDate (fixed)
  $3,     -- ProjectId
  $4,     -- NoOfPosition
  $5,     -- CTCMin
  $6,     -- CTCMax
  $7,     -- PositionFilled
  $8,     -- ExperienceMin
  $9,     -- ExperienceMax
  $10,    -- Description
  $11,    -- Role
  $12,    -- StartDate
  $13,    -- EndDate
  $14     -- Status
);

      `,
      [Title, Location]
    );

    return responseHandle(null, 201, "Job created", true);
  } catch (error) {
    return responseHandle(null, 500, error.message, false);
  }
}
