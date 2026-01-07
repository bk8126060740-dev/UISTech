
// const config = {
//   user: process.env.DATABASE_ADMIN_USER, 
//   password: process.env.DATABASE_ADMIN_PASSWORD,
//   server: process.env.DATABASE_ADMIN_SERVER,
//   database: process.env.DATABASE,
//   options: {
//     encrypt: true,
//     trustServerCertificate: true,
//     port: 1433,
//   },
// };

// module.exports = config;


const config = {
  user: process.env.DATABASE_ADMIN_USER || "usidbadmin",
  password: process.env.DATABASE_ADMIN_PASSWORD || "U$idb@admin135",
  host: process.env.DATABASE_ADMIN_SERVER || "10.30.16.5",
  database: process.env.DATABASE || "UrmilaHRMS_UAT",
  port: Number(process.env.DATABASE_PORT) || 5432,
};

module.exports = config;



