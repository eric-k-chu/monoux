import { type Cell, STARTING_BOARD } from '@chess/core'
import { createSignal } from 'solid-js'
import { type ChessApiState, useChessApi } from './use-chess-api'

type ClassicState = {
  board: () => Cell[][]
  move: (board: Cell[][]) => void
  connect: () => void
  disconnect: () => void
}

type ChessWebSocket = ReturnType<ChessApiState['classic']['subscribe']>

export function useClassic(): ClassicState {
  const api = useChessApi()
  const [board, setBoard] = createSignal(STARTING_BOARD)
  let ws: ChessWebSocket | undefined

  const move = (board: Cell[][]) => {
    if (!ws) return
    ws.send({ board: JSON.stringify(board) })
  }

  const connect = () => {
    if (ws) ws.close()
    ws = api.classic.subscribe()
    ws.on('message', ({ data }) => {
      setBoard(JSON.parse(data.board) as Cell[][])
    })
  }

  const disconnect = () => {
    if (!ws) return
    ws.close()
    ws = undefined
  }

  return {
    board,
    move,
    connect,
    disconnect,
  }
}
