// export const authTbl = `
//     CREATE TABLE adminAuth (
//     adminId INT AUTO_INCREMENT PRIMARY KEY,
//     userId VARCHAR(50) NOT NULL UNIQUE,
//     passwordHash VARCHAR(255) NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     last_login DATETIME NULL,
//     password_reset_token VARCHAR(255) NULL,
//     reset_token_expires DATETIME NULL
// );
// `;
// export const careersTbl = `
//     CREATE TABLE careers (
//         id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(), 
//         jobtitle VARCHAR(255) NOT NULL, 
//         companyname VARCHAR(255) NOT NULL,
//         experience TEXT, 
//         location VARCHAR(255),
//         work_details TEXT, 
//         work_type TEXT,
//         active_vacancy INT,
//         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Use DATETIME for timestamps
//         updated_at DATETIME DEFAULT CURRENT_TIMESTAMP   -- Use DATETIME for timestamps
//     );
// `;

// export const announcementsTbl = `
//     CREATE TABLE announcements (
//     id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
//     description TEXT NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
// `;

// export const professionsTbl = `
//     CREATE TABLE professions (
//     id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
//     professiontitle VARCHAR(255) NOT NULL, 
//     professionkeyname VARCHAR(255) NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );

// `;
// export const jobapplicationsTbl = `
//     CREATE TABLE jobapplications (
//     id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
//     name VARCHAR(255) NOT NULL, 
//     email VARCHAR(255) NOT NULL,
//     mobilenumber VARCHAR(255) NOT NULL,
//     applypost VARCHAR(255) NOT NULL,
//     state VARCHAR(255) NOT NULL,
//     experience VARCHAR(255) NOT NULL,
//     currentemployer VARCHAR(255) NOT NULL,
//     expertise VARCHAR(255) NOT NULL,
//     qualification VARCHAR(255) NOT NULL,
//     resumefile VARCHAR(255) NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
// `;
