import dotenv from "dotenv";

dotenv.config();

// console.log(process.env)

export const port = process.env.PORT;
export const baseUrl = process.env.BASEURL;
export const dbURL = process.env.DB_URL;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "3h";