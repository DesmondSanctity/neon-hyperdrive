# neon-hyperdrive
Using Hono.js, Neon Postgres with Cloudflare Hyperdrive for faster queries


This is a demo project that benchmarked for speed between two applications.

- The first one is a simple [User API](/neon/) application that uses [Hono.js](https://hono.dev/) and [Cloudflare Hyperdrive](https://developers.cloudflare.com/hyperdrive/) bindings to connect to a Neon Postgres database. Hyperdrive is a dev tool by Cloudflare to make database queries faster by distributing them global among their servers.

- The second one is a simple [User API](/native-pg/) application that uses Express.js and [Sequelize ORM](https://sequelize.org/) to connect to a Neon Postgres database.

Each directory has its own instruction for setup and running the benchmark. I used [Postman Web](https://go.postman.co/home) to run the requests.

Note: The benchmark is against non-mutating queries like GET. Other mutating queries like INSERT, PUT and CREATE are not considered in this benchmark as Hyperdrive does not cache them.

You can watch a demo [here](https://www.loom.com/share/ac9ac7b1b68d4fd3afa0c78896463e35?sid=2dc9cbcb-aa69-41c8-8a78-d21d24523344) to understand the whole thing.
