import type { Piece } from './piece'

export type Cell = Piece | ''

export const STARTING_BOARD: Cell[][] = [
  ['br', 'bh', 'bb', 'bq', 'bk', 'bb', 'bh', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wh', 'wb', 'wq', 'wk', 'wb', 'wh', 'wr'],
]

export function isCellEmpty(cell: Cell): cell is '' {
  return cell === ''
}
