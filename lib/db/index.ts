
import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not configured");
    }

    pool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });

    pool.on("error", (error) => {
      console.error("Unexpected PostgreSQL pool error:", error);
    });
  }

  return pool;
}

export function getDb() {
  return drizzle(getPool());
}
