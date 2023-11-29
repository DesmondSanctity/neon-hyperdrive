import { Context } from "hono";
import { db } from "./dbconnect";


type User = {
    name: string;
    email: string;
    phone: string;
}

export const getUsers = async (c: Context) => {
    const limit = c.req.query('limit') || 10;
    const offset = c.req.query('offset') || 0;
    const dbClient = await db(c);
    let result = await dbClient.query
        (`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`);
    return result;
};


export const getUser = async (c: Context) => {
    const id = parseInt(c.req.param('id'))
    const dbClient = await db(c);
    let result = await dbClient.query
        (`SELECT * FROM users WHERE id = ${id}`);
    return result;
}

export const createUser = async (c: Context) => {
    const user = await c.req.json<User>()
    const dbClient = await db(c);
    let result = await dbClient.query
        (`INSERT INTO users (name, email, phone) VALUES ('${user.name}', '${user.email}', '${user.phone}')`);
    return result;
}