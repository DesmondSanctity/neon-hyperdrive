import { Sequelize } from "sequelize";
import {
  dbName,
  dbPassword,
  dbUsername,
  dbPort
} from "../config/index.js";

const db = new Sequelize(dbName, dbUsername, dbPassword, {
  host: "localhost",
  dialect: "mysql",
  port: dbPort
});


export default db;