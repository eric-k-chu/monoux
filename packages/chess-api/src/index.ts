import { chessApp } from '@chess/core'

chessApp.listen(3000, (s) => {
  console.log(`Elysia is running at ${s.hostname}:${s.port}`)
})
