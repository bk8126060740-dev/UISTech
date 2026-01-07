// import { responseHandle } from "@/common/adminApi/apiHandler";
// import query from "@/lib/db";
// import bcrypt from 'bcryptjs';

// export async function POST(req, res) {
//     const body = await req.json();
//     const { userId, token, password } = body

//     if (!userId || !token || !password) {
//         return responseHandle(null, 400, 'userId, token, and Password are required.', false);
//     }

//     try {
//         const selectQuery = `
//                 SELECT password_reset_token, reset_token_expires
//                 FROM adminAuth
//                 WHERE userId = @userId
//             `;
//         const selectParams = { userId };
//         const result = await query(selectQuery, selectParams);

//         if (!result.recordset.length) {
//             return responseHandle(null, 400, 'Invalid user ID.', false);
//         }

//         const user = result.recordset[0];

//         if (user.password_reset_token !== token) {
//             return responseHandle(null, 400, 'Invalid or expired token.', false);
//         }

//         const resetTokenExpires = new Date(user.reset_token_expires);
//         if (new Date() > resetTokenExpires) {
//             return responseHandle(null, 400, 'Token has expired.', false);
//         }
//         const hashedPassword = await bcrypt.hash(password, 12);

//         const updateQuery = `
//                 UPDATE adminAuth
//                 SET passwordHash = @hashedPassword, password_reset_token = NULL, reset_token_expires = NULL
//                 WHERE userId = @userId
//             `;
//         const updateParams = { userId, hashedPassword };
//         await query(updateQuery, updateParams);
//         return responseHandle(null, 200, 'Password reset successfully.', true);
//     } catch (error) {
//         console.error('Error during password reset:', error.message);
//         const err = error.message
//         return responseHandle(null, 500, err, false);
//     }
// }
