import { Elysia } from 'elysia'
import { classic } from './classic'

const app = new Elysia().use(classic).listen(3000, (s) => {
  console.log(`Elysia is running at ${s.hostname}:${s.port}`)
})

export type ChessApp = typeof app
