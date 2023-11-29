import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/index.js";

/** auth middleware */
export default async function Auth(req, res, next) {
  try {
    // Access authorization header to validate the request
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token and retrieve the decoded payload
    const decodedToken = jwt.verify(token, jwtSecret, {
      // Specify additional options for token verification
      algorithms: ["HS256"], // Specify the expected algorithm for the token
    });

    // Check if the token has expired
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decodedToken.exp <= currentTimestamp) {
      throw new Error("Token expired");
    }

    req.user = decodedToken;

    next();
  } catch (error) {
    // Handle specific error cases
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      res.status(401).json({ error: "Invalid token" });
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }
  }
}
