import { Sequelize } from "sequelize";
import {
  dbURL
} from "../config/index.js";

const db = new Sequelize(dbURL, {});


export default db;