import type { ChessApp } from '@chess/core'
import { treaty } from '@elysiajs/eden'

export type ChessApiState = ReturnType<typeof treaty<ChessApp>>

export function useChessApi(): ReturnType<typeof treaty<ChessApp>> {
  return treaty<ChessApp>('localhost:3000')
}
