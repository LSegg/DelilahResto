import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  SERVER_PORT: process.env.SERVER_PORT,
};

export default {
  ENV,
};
