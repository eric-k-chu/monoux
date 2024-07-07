const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const GREEN = '\x1b[32m'
const RESET = '\x1b[0m'
const LOAD = '\u{25CB}'
const ERROR = '\u{2717}'
const SUCCESS = '\u{2713}'
const INFO = '\u{02C3}'

export class Logger {
  constructor() {}

  load(message: string, ...other: unknown[]): void {
    console.log(`${YELLOW}${LOAD}${RESET} ${message}`, ...other)
  }

  error(message: string, ...other: unknown[]): void {
    console.error(`${RED}${ERROR}${RESET} ${message}`, ...other)
  }

  success(message: string, ...other: unknown[]): void {
    console.log(`${GREEN}${SUCCESS}${RESET} ${message}`, ...other)
  }

  info(message: string, ...other: unknown[]): void {
    console.log('Test')
    console.group()
    console.info(`${INFO} ${message}`, ...other)
    console.groupEnd()
  }

  clear(): void {
    console.clear()
  }
}
