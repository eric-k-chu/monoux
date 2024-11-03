import { Elysia } from 'elysia'
import { start } from './classic/start'

const app = new Elysia().use(start).listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
