const NUMBER_OF_CELLS = 81

export function isValidSudoku(board: string[][]): boolean {
  const rows = new Map<number, Set<number>>()
  const columns = new Map<number, Set<number>>()
  const boxes = new Map<number, Set<number>>()

  for (let i = 0; i < NUMBER_OF_CELLS; i++) {
    const row = Math.floor(i / 9)
    const column = i % 9
    const box = Math.floor(row / 3) * 3 + Math.floor(column / 3)
    const cell = Number(board[row][column])

    if (Number.isNaN(cell)) return false

    if (!rows.has(row)) rows.set(row, new Set<number>())
    if (!columns.has(column)) columns.set(column, new Set<number>())
    if (!boxes.has(box)) boxes.set(box, new Set<number>())

    if (rows.get(row)?.has(cell)) return false
    if (columns.get(column)?.has(cell)) return false
    if (boxes.get(box)?.has(cell)) return false

    rows.get(row)?.add(cell)
    columns.get(column)?.add(cell)
    boxes.get(box)?.add(cell)
  }

  return true
}
