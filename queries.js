import { Pool } from 'pg';
import { db } from '../../config.js';

const pool = new Pool({
  user: db.DB_USER,
  host: db.DB_HOST,
  database: db.DB_NAME,
  password: db.DB_PASSWORD,
  port: 5432,
});

export default pool;
