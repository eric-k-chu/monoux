import { Elysia } from 'elysia'

export const start = new Elysia().get('/', () => {
  return 'Hello, foo!'
})
