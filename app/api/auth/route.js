// import { adminMsg } from "@/common/adminApi/adminMessages";
// import { responseHandle } from "@/common/adminApi/apiHandler";
// //import query from '@/lib/postgres';
// import { query } from "@/lib/postgres";

// import bcrypt from 'bcryptjs';

// export const checkIfUsernameExists = async (userId) => {
//     try {
//         const insertQuery = `
//         SELECT COUNT(*) AS count 
//         FROM AdminAuth 
//         WHERE userId = @userId
//       `;
//         const params = { userId };
//         const result = await query(insertQuery, params);
//         return result;
//     } catch (err) {
//         console.error('Error checking username existence:', err);
//         return responseHandle(null, 500, err.message, false)
//     }
// };

// export const createAdminUser = async (userId, password) => {
//     const salt = bcrypt.genSaltSync(10);
//     const passwordHash = bcrypt.hashSync(password, salt);

//     try {
//         const insertQuery = `
//             INSERT INTO AdminAuth (userId, passwordHash) 
//             VALUES (@userId, @passwordHash)
//         `;
//         const params = { userId, passwordHash };
//         const result = await query(insertQuery, params);
//         return result;
//     } catch (err) {
//         console.error('Error creating admin:', err);
//         return responseHandle(null, 500, 'Failed to create new admin user', false);
//     }
// };



// export async function GET(req, res) {
//     try {
//         const data = await query('SELECT * FROM AdminAuth');
//         const admins = data.recordset || []
//         return responseHandle(admins, 200, 'Get Admin Data Successfully', true)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return responseHandle(null, 500, adminMsg?.serverError, false)
//     }
// }

// export async function POST(req) {
//     try {
//         const { userId, password } = await req.json();

//         if (!userId || !password) {
//             return responseHandle(null, 400, 'userId or password is required.', false);
//         }

//         const usernameExists = await checkIfUsernameExists(userId);
//         if (usernameExists.recordset[0].count > 0) {
//             return responseHandle(null, 400, 'Admin already exists', false)
//         }

//         const result = await createAdminUser(userId, password);
//         if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
//             return responseHandle(null, 200, 'Admin created successfully', true);
//         } else {
//             return responseHandle(null, 500, 'Failed to create Admin', false);
//         }

//     } catch (error) {
//         console.error('Error during login:', error);
//         return responseHandle(null, 500, adminMsg?.serverError, false);
//     }
// }
