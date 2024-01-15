// src/worker.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { getUsers, getUser, createUser } from './queries'



type Env = {
	HYPERDRIVE: Hyperdrive;
};

const app = new Hono();
app.get('/', (c) => c.text('Pretty Users API'))
app.use('*', prettyJSON())
app.notFound((c) => c.json({ message: 'Route Not Found', ok: false }, 404))

const api = new Hono<{ Bindings: Env }>()
api.use('/users/*', cors())

api.get('/users', async (c) => {
	const users = await getUsers(c)
	return c.json({ users })
})

api.get('/users/:id', async (c) => {
	const user = await getUser(c)
	return c.json({ user })
})

api.post('/users', async (c) => {
	const ok = createUser(c)
	return c.json({ ok })
})

app.route('/api', api)


export default app;
