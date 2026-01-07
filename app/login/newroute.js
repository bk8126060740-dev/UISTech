// import { query } from "@/lib/postgres";


// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { username, password } = body;

//     const sql = `
//       INSERT INTO users (username, password, created_at)
//       VALUES (?, ?, NOW())
//     `;

//     await query(sql, [username, password]);

//     return Response.json({
//       success: true,
//       message: "User inserted successfully!"
//     });
//   } catch (err) {
//     console.error("Insert Error:", err);
//     return Response.json(
//       { success: false, message: "DB Error" },
//       { status: 500 }
//     );
//   }
// }
