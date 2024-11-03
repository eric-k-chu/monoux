import type { Piece } from '../lib/piece'

export function translatePiece(piece: Piece): string {
  if (piece.length !== 2) throw new Error('Invalid piece format')

  switch (piece[1]) {
    case 'p':
      return 'Pawn'
    case 'r':
      return 'Rook'
    case 'h':
      return 'Knight'
    case 'b':
      return 'Bishop'
    case 'q':
      return 'Queen'
    case 'k':
      return 'King'
    default:
      throw new Error('Invalid piece type')
  }
}
