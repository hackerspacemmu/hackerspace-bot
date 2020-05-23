import dotenv from 'dotenv';

dotenv.config();

const prefix = '!';
const token = process.env.TOKEN;
const role = {
  admin: process.env.ADMIN_ROLE_ID,
  member: process.env.MEMBER_ROLE_ID
};

export { prefix, token, role };

