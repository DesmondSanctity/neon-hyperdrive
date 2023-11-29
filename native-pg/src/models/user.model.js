import { Sequelize } from "sequelize";
import db from "../database/connect.js";

const { DataTypes } = Sequelize;

const Users = db.define('native_users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    freezeTableName: true,
    scopes: {
        withoutSensitiveInfo: {
            attributes: { exclude: ['password'] }
        }
    }
});


export default Users;