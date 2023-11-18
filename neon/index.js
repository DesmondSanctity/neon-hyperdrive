import express from "express";
import cors from "cors";
import redis from "redis";
import bodyParser from "body-parser";
import { port, redisURL } from "./src/config/index.js";
import { AppError } from "./src/utils/responseHandler.js";
import { responseInterceptor } from "./src/utils/log/interceptor.js";
import swaggerDocs from "./swagger.js";
import "./src/models/index.js";
import userRouter from "./src/routes/users.js";
import authRouter from "./src/routes/auth.js";

const app = express();

app.use(cors());

app.use(express.json());
app.disable("x-powered-by"); // less hackers know about our stack
app.use(bodyParser.urlencoded({ extended: false }));

// Your middleware function to handle errors
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    // If it's a CustomError, respond with the custom status code and message
    return res
      .status(err.statusCode)
      .json({ status: err.status, error: err.message, code: err.statusCode });
  } else {
    // If it's an unknown error, respond with a 500 status code and a generic error message
    return res
      .status(500)
      .json({ status: "critical", error: "Internal Server Error.", code: 500 });
  }
};

// Applying the error handling middleware
app.use(errorHandler);

// create a client connection
export const client = redis.createClient({
  url: redisURL,
});
// on the connection
client.on("connect", () => console.log("Connected to Redis"));

client.connect();

// Run the swagger docs before log interception
swaggerDocs(app, port);

// place an interceptor above all routes that you want to `intercept`
app.use(responseInterceptor);

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`
      ###########################################
      Server is currently running at port ${port}
      ###########################################`);
});
