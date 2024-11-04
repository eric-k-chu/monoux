import { CLASSIC_STARTER, type Cell, type Piece } from '@chess/core'
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
  const [board, setBoard] = createSignal(CLASSIC_STARTER)
  let ws: ChessWebSocket | undefined

  const move = (piece: Piece, from: number, to: number) => {
    if (!ws) return

    const updatedBoard = board()
    updatedBoard[from][to] = piece
    setBoard(updatedBoard)

    ws.send({
      gameId: 'game1',
      userId: 'user1',
      from,
      to,
      piece,,
      board: updatedBoard,
    })
  }

  const connect = () => {
    if (ws) ws.close()
    ws = api.classic.subscribe()
    ws.on('message', ({ data }) => {
      setBoard(data.board)
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
