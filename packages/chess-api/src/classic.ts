import { Elysia, t } from 'elysia'

const body = t.Object({ board: t.String() })

export const classic = new Elysia().ws('/classic', {
  body,
  response: body,
  open(ws) {
    ws.subscribe('game1')
  },
  message(ws, message) {
    // TODO: validation
    ws.publish('game1', { board: message.board })
  },
  close(ws) {
    console.log('closed')
  },
})
