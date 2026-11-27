
import "server-only";

import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dbPath = path.join(process.cwd(), "data", "cdptpl.db");

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const globalForDb = globalThis as typeof globalThis & {
  sqlite?: Database.Database;
};

const db =
  globalForDb.sqlite ??
  new Database(dbPath);

if (process.env.NODE_ENV !== "production") {
  globalForDb.sqlite = db;
}

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 5000");

export default db;
