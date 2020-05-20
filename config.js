import dotenv from "dotenv";

dotenv.config();

const prefix = '!';
const token = process.env.TOKEN;

export { prefix, token };

