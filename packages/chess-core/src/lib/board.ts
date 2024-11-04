import { type Static, t } from 'elysia'
import { piece } from './piece'

export const cell = t.Union([piece, t.Undefined()])

export const board = t.Array(t.Array(cell))

export type Cell = Static<typeof cell>

export const CLASSIC_STARTER: Cell[][] = [
  ['br', 'bh', 'bb', 'bq', 'bk', 'bb', 'bh', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wh', 'wb', 'wq', 'wk', 'wb', 'wh', 'wr'],
]
