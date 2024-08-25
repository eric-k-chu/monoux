import { describe, expect, it } from 'vitest'
import { add } from './main'

describe('add', () => {
  it('test', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
