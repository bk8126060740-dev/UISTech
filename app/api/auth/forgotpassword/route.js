// import { responseHandle } from "@/common/adminApi/apiHandler";
// import query from "@/lib/db";
// import nodemailer from 'nodemailer';

// const generateResetToken = () => {
//     const randomValues = [];
//     for (let i = 0; i < 32; i++) {
//         randomValues.push(Math.floor(Math.random() * 256));
//     }
//     return Buffer.from(randomValues).toString('hex');
// };

// const sendResetEmail = async (userId, email, token) => {

//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASSWORD
//             }
//         });


//         const resetLink = `${process.env.SEND_MAIL_FRONTEND_URL}admin/resetpassword?token=${token}&userId=${userId}`;

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'Password Reset Request',
//             text: `To reset your password, please click the following link: ${resetLink}`,
//         };

//         await transporter.sendMail(mailOptions);
//     } catch (err) {
//         console.error('Error sending reset email:', err);
//         throw new Error('Error sending reset email');
//     }
// };

// export async function POST(req, res) {
//     try {
//         const { userId, email } = await req.json();

//         if (!userId && !email) {
//             return responseHandle(null, 400, 'userId Or Email is required.', false);
//         }

//         if (email !== process.env.EMAIL_USER) {
//             return responseHandle(null, 200, 'Check your email if both user ID and email are correct.', true);
//         }

//         const selectQuery = `
//             SELECT userId FROM adminAuth 
//             WHERE userId = @userId
//         `;
//         const params = { userId };
//         const result = await query(selectQuery, params);
//         if (!result.recordset.length) {
//             return responseHandle(null, 400, 'No account found with this User ID.', false);
//         }

//         const resetToken = generateResetToken();
//         const resetExpires = new Date();
//         resetExpires.setHours(resetExpires.getHours() + 1);
//         const updateQuery = `
//             UPDATE adminAuth 
//             SET password_reset_token = @resetToken, reset_token_expires = @resetExpires
//             WHERE userId = @userId
//         `;
//         const updateParams = { userId, resetToken, resetExpires: resetExpires.toISOString() };
//         await query(updateQuery, updateParams);
//         await sendResetEmail(userId, email, resetToken);
//         return responseHandle(null, 200, 'Check your email if both user ID and email are correct.', true);
//     } catch (error) {
//         console.error('Error during forgot password process:', error);
//         const err = error.message
//         return responseHandle(null, 500, err, false);
//     }
// }
