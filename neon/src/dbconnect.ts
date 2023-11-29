import { Context } from 'hono';
import { Client } from 'pg';


export const db = async (c: Context) => {
    const client = new Client({ connectionString: c.env.HYPERDRIVE.connectionString });
    // Connect to your database
    await client.connect();

    return client

};