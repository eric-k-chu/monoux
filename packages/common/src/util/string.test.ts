import { describe, expect, it } from 'vitest'
import { capitalize } from './string'

describe('capitalize', () => {
  it('empty string', () => {
    expect(capitalize('')).toEqual('')
  })

  it('capital first char', () => {
    expect(capitalize('test')).toEqual('Test')
  })
})
