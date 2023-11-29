import db from "../database/connect.js";
import Users from "./user.model.js";

try {
  await db
    .sync({ alter: true })
    .then(() => {
      console.log("Database synced");
      console.log("Database connection has been established successfully.");
    })
    .catch((err) => {
      console.log({ message: "Error syncing database", error: err });
    });
} catch (error) {
  console.log("Unable to connect to the database due to: ", error);
}

export { Users };
