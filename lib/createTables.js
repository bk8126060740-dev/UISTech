//import { db } from "./mysql";
import { db } from "./postgres";

export async function createCareersTable() {
  try {
    const [rows] = await db.query(`
      SELECT COUNT(*) AS count 
      FROM information_schema.tables 
      WHERE table_schema = '${process.env.DB_NAME}' 
      AND table_name = 'Careers';
    `);

    if (rows[0].count === 0) {
      await db.query(`
        CREATE TABLE Careers (
          Id INT AUTO_INCREMENT PRIMARY KEY,
          JobTitle VARCHAR(255),
          CompanyName VARCHAR(255),
          Experience VARCHAR(50),
          Location VARCHAR(255),
          Active_vacancy INT,
          Work_Details TEXT,
          Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      console.log("careers table created.");
    } else {
      console.log("careers table already exists.");
    }
  } catch (err) {
    console.error("Error creating careers table:", err);
  }
}
