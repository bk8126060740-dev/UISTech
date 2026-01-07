// import { responseHandle } from '@/common/adminApi/apiHandler';
// import query from '@/lib/db';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const checkIfUsernameExists = async (userId) => {
//     try {
//         const selectQuery = `
//             SELECT userId, passwordHash, last_login FROM adminAuth 
//             WHERE userId = @userId
//         `;
//         const params = { userId };
//         const result = await query(selectQuery, params);
//         return result.recordset[0] || null;
//     } catch (err) {
//         console.error('Error checking username existence:', err);
//         return responseHandle(null, 500, 'Error checking username or password', false);
//     }
// };

// const updateLastLogin = async (userId) => {
//     try {
//         const updateQuery = `
//             UPDATE adminAuth 
//             SET last_login = GETDATE() 
//             WHERE userId = @userId
//         `;
//         const params = { userId };
//         await query(updateQuery, params);
//     } catch (err) {
//         console.error('Error updating last login:', err);
//         throw new Error('Error updating last login');
//     }
// };

// const generateToken = (user) => {
//     const payload = {
//         userId: user.userId,
//         passwordHash: user.passwordHash
//     };
//     const secret = process.env.JWT_SECRET || 'your_jwt_secret';
//     const options = { expiresIn: '1h' };
//     return jwt.sign(payload, secret, options);
// };


// export async function POST(req, res) {
//     try {
//         const { userId, password } = await req.json();

//         if (!userId || !password) {
//             return responseHandle(null, 400, 'userId and password are required.', false);
//         }

//         const user = await checkIfUsernameExists(userId);
//         if (!user) {
//             return responseHandle(null, 400, 'Invalid username or password', false);
//         }
//         const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
//         if (!isPasswordValid) {
//             return responseHandle(null, 400, 'Invalid username or password', false);
//         }
//         await updateLastLogin(userId);
//         const token = generateToken(user);
//         return responseHandle({ userId: user.userId, token }, 200, 'Login successful', true);

//     } catch (error) {
//         console.error('Error during login:', error);
//         const err = error.message
//         return responseHandle(null, 500, err, false);
//     }
// }