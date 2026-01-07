import { Pool } from "pg";

let pool;

if (!global._pgPool) {
  global._pgPool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT || 5432),
    ssl: { rejectUnauthorized: false } // Azure compatible
  });
}

pool = global._pgPool;

/* ✅ SIMPLE QUERY (existing code safe) */
export async function query(text, params) {
  return pool.query(text, params);
}

/* 🔥 IMPORTANT: EXPORT POOL FOR TRANSACTIONS */
export { pool };
