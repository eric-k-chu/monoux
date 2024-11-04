import { board } from '@chess/core'
import { type Static, t } from 'elysia'

export const classicInput = t.Object({
  gameId: t.String(),
  userId: t.String(),
  from: t.Number(),
  to: t.Number(),
  piece: t.String(),
  board,
})

export type ClassicInput = Static<typeof classicInput>

export const classicResponse = t.Object({
  status: t.Union([
    t.Literal('wcheck'),
    t.Literal('bheck'),
    t.Literal('wmate'),
    t.Literal('bmate'),
    t.Literal('draw'),
    t.Literal('playing'),
  ]),
  board,
  turn: t.Union([t.Literal('w'), t.Literal('b')]),
  pgn: t.String(),
})

export type ClassicOutput = Static<typeof classicResponse>
