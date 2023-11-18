import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;
export const baseUrl = process.env.BASEURL || "https://localhost:5000"
export const dbName = process.env.DB_NAME || "";
export const dbUsername = process.env.DB_USERNAME || "";
export const dbPassword = process.env.DB_PASSWORD || "";
export const dbPort = process.env.DB_PORT || 3306
export const dbHost = process.env.DB_HOST || "localhost";
export const jwtSecret = process.env.JWT_SECRET || "";
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "";