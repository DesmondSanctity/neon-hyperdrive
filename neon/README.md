## neon-hyperdrive-api

This a simple User API application that uses the [Cloudflare Hyperdrive](https://developers.cloudflare.com/hyperdrive/) bindings to connect to a Neon Postgres database. Hyperdrive is a dev tool by Cloudflare to make database queries faster by distributing them global among their servers.

This app is deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) and to run it, you must have [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed and Node.js >=16.13.0 installed too.

Steps to run application
- If you are not, open your terminal and change directory to neon folder. I assumed you have cloned the repository to your local machine.
```bash
cd neon
```
- When you are in the folder, run the following command to install dependencies
```bash
npm install
```
- I assume you have a Neon Postgres connection URL, if you do not have, check this [instruction](https://neon.tech/docs/connect/connect-from-any-app) on how to get one. It is always prefixed by `postgresql://`.
- After installation, assuming you have Wrangler CLI installed, login to your Wrangler CLI to authenticate use using this command
```bash
npx wrangler login
```
- Now with your Neon Postgres connection string, run this command to proxy your database through Hyperdrive. It will generate an id among other things. Copy the ID and update your [wrangler.toml](/neon/wrangler.toml) file with it. Remember to change the placeholders for your hyperdrive name and your neon connection string.
```bash
npx wrangler hyperdrive create <your-hyperdrive-name> --connection-string="your-neon-connection-string"
```
- When you have finished authenticating your terminal and adding the hyperdrive id, you can now deploy to Workers using this command
```bash
npx wrangler deploy
```
- To add data, go to your Neon Postgres dashboard and add data using the SQL Editor tool. Paste this command into the editor and run it.
```sql
CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL);
INSERT INTO users (name, email, phone) VALUES
  ('Kehinde', 'kh@nmail.com', '1209867574'),
  ('Desmond', 'des@nmail.com', '4584930999'),
  ('Franklin', 'frk@nmail.com', '3458976048'),
  ('Aisha', 'as@nmail.com', '0987954890'),
  ('Adaeze', 'az@nmial.com', '1234567890');
SELECT * FROM users;
```
- This last command will generate the Workers URL for you and this is the base URL for your API requests. This app is a User API application and has only these GET endpoints.
```bash
/api/users - To get all the users in the DB
/api/users/:id - To get a single user in the DB
```
- You can test the endpoints using [Postman Web](https://go.postman.co/home) or any other API testing tool.
