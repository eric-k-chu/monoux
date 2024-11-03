import { type Cell, isCellEmpty, translatePiece } from '@chess/core'
import { Index, type JSXElement, createMemo, createSignal, onCleanup, onMount } from 'solid-js'
import { useClassic } from './lib'

export function App(): JSXElement {
  const { board, move, connect, disconnect } = useClassic()
  const [from, setFrom] = createSignal<number>()
  const [to, setTo] = createSignal<number>()

  onMount(connect)
  onCleanup(disconnect)

  const onMove = () => {
    const start = from()
    const end = to()
    if (!start || !end) return
    const selected = board()[Math.floor(start / 8)][end % 8]
  }

  return (
    <div class='flex min-h-screen items-center justify-center'>
      <div class='grid grid-cols-8 grid-rows-8'>
        <Index each={board()}>
          {(cells, i) => (
            <Index each={cells()}>
              {(cell, j) => (
                <Square cell={cell()} index={i * 8 + j} onMove={move} board={board()} />
              )}
            </Index>
          )}
        </Index>
      </div>
    </div>
  )
}

type SquareProps = {
  cell: Cell
  board: Cell[][]
  onMove: (board: Cell[][]) => void
  index: number
}

function Square({ cell, index, board, onMove }: SquareProps): JSXElement {
  const isWhite = createMemo(() => {
    const row = Math.floor(index / 8)
    const col = index % 8
    return (row + col) % 2 === 0
  })

  const bg = isWhite() ? 'bg-white' : 'bg-gray-600'

  if (isCellEmpty(cell)) return <div class={`size-16 ${bg}`} />

  const move = () => {
    const row = Math.floor(index / 8)
    const col = index % 8
    const selected = board[row][col]

    console.log(selected)

    // if (selected === cell) return

    // const newBoard = JSON.parse(JSON.stringify(board)) as Cell[][]
    // newBoard[row][col] = newBoard[row][col] === '' ? cell : ''
    // newBoard[row][col] = newBoard[row][col] === cell ? selected : newBoard[row][col]

    // onMove(newBoard)
  }

  return (
    <div class={`flex size-16 select-none items-center justify-center ${bg}`} onClick={move}>
      {translatePiece(cell)}
    </div>
  )
}
