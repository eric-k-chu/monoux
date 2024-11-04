import { type Static, t } from 'elysia'

export const piece = t.Union([
  t.Literal('wp'),
  t.Literal('wr'),
  t.Literal('wh'),
  t.Literal('wb'),
  t.Literal('wq'),
  t.Literal('wk'),
  t.Literal('bp'),
  t.Literal('br'),
  t.Literal('bh'),
  t.Literal('bb'),
  t.Literal('bq'),
  t.Literal('bk'),
])

export type Piece = Static<typeof piece>
