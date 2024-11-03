import { Index, type JSXElement } from 'solid-js'

export function App(): JSXElement {
  return (
    <div class='flex min-h-screen items-center justify-center'>
      <div class='grid grid-cols-8 grid-rows-8'>
        <Index each={Array.from({ length: 8 ** 2 })}>
          {(_, i) => (
            <div
              class={`flex size-16 items-center justify-center ${isWhiteSquare(i) ? 'bg-white' : 'bg-gray-600'}`}
            >
              {indexToNotation(i)}
            </div>
          )}
        </Index>
      </div>
    </div>
  )
}

function isWhiteSquare(i: number): boolean {
  const row = Math.floor(i / 8)
  const col = i % 8
  return (row + col) % 2 === 0
}

function indexToNotation(i: number): string {
  const row = Math.floor(i / 8)
  const col = i % 8
  return `${String.fromCharCode(97 + col)}${8 - row}`
}
