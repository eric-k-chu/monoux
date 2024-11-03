import { Elysia } from 'elysia'
import { classic } from './classic'

export const chessApp = new Elysia().use(classic)

export type ChessApp = typeof chessApp
