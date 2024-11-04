import { CLASSIC_STARTER } from '@chess/core'
import { Elysia } from 'elysia'
import { classicInput, classicResponse } from './classic.model'

export const classic = new Elysia().ws('/classic', {
  body: classicInput,
  response: classicResponse,
  open: (ws) => {
    ws.subscribe('game1')
    ws.publish('game1', {
      status: 'playing',
      board: CLASSIC_STARTER,
      turn: 'w',
      pgn: '',
    })
  },
  message: (ws, body) => {
    ws.publish('game1', {
      status: 'playing',
      board: body.board,
      turn: 'w',
      pgn: '1. e4',
    })
  },
  close: (ws) => {
    console.log('closed')
  },
})
