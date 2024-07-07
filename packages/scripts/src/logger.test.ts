import { afterEach, describe, expect, it, vi } from 'vitest'
import { Logger } from './logger'

const logger = new Logger()

vi.spyOn(console, 'log')
vi.spyOn(console, 'error')
vi.spyOn(console, 'info')

describe('logger', () => {
  afterEach(() => {
    logger.clear()
    vi.clearAllMocks()
  })

  it('load', () => {
    logger.load('Loading...')
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toBeCalledWith('\x1b[33m\u25CB\x1b[0m Loading...')
  })

  it('error', () => {
    logger.error('Error!')
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(console.error).toBeCalledWith('\x1b[31m\u2717\x1b[0m Error!')
  })

  it('success', () => {
    logger.success('Success!')
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toBeCalledWith('\x1b[32m\u2713\x1b[0m Success!')
  })

  it('info', () => {
    logger.info('Info!')
    expect(console.info).toHaveBeenCalledTimes(1)
    expect(console.info).toBeCalledWith('\u02C3 Info!')
  })
})
