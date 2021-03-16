import dotenv from 'dotenv';

dotenv.config();

const prefix = '!';
const token = process.env.TOKEN;
const role = {
  admin: process.env.ADMIN_ROLE_ID,
  member: process.env.MEMBER_ROLE_ID,
};
const db = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

export { prefix, token, role, db };

