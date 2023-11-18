import { Sequelize } from "sequelize";
import db from "../database/connect.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
    }

}, {
    freezeTableName: true,
    scopes: {
        withoutSensitiveInfo: {
            attributes: { exclude: ['password'] }
        }
    }
});


export default Users;