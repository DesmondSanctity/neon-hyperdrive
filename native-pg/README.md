## native-pg-sequelize-api

This a simple [User API](/native-pg/) application that uses the [Sequelize ORM](https://sequelize.org/) to connect to a Neon Postgres database.

This app is deployed to [Render](https://dashboard.render.com/) and to run it, you just need Node.js installed.

Steps to run application
- If you are not, open your terminal and change directory to neon folder. I assumed you have cloned the repository to your local machine.
```bash
cd native-pg
```
- When you are in the folder, run the following command to install dependencies
```bash
npm install
```
- I assume you have a Neon Postgres connection URL, if you do not have, check this [instruction](https://neon.tech/docs/connect/connect-from-any-app)on how to get one. It is always prefixed by `postgresql://`.
- After installation, create a file called `.env` in the root of the project and add the following line to it.
```bash
PORT=5000
JWT_SECRET=<your-jwt-secret>
DB_URL=<your-neon-connection-string>
```
- When you have these set, you can now run the project locally by running the command below.
```bash
npm start
```
- The application will start on [http://localhost:5000](http://localhost:5000)
- To add data, go to [http://localhost:5000/docs](http://localhost:5000/docs), I have documented the APIs with Swagger. You will see the UI and follow the placeholder data to create users.
- You can go ahead now to deploy to Render. Remeber to set `native-pg` as the root folder when configuring the Render deployment. The build command should be `yarn` and the start command `node index.js`. Render will generate a base URL for your API when deployment is successful.
-This app is a User API application and has only these GET endpoints.
```bash
/api/v1/users - To get all the users in the DB
/api/v1/users/:id - To get a single user in the DB
```
- You can test the endpoints using [Postman Web](https://go.postman.co/home) or any other API testing tool.