export function isEmpty(value: unknown): value is null | undefined {
  if (value === null) return true
  if (value === undefined) return true

  if (typeof value === 'string') {
    return value.trim() === ''
  }

  if (typeof value === 'number') {
    if (Number.isNaN(value)) return true
    return value === 0
  }

  if (Array.isArray(value)) {
    return value.length === 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  if (typeof value === 'boolean') return false
  throw new Error(`Unknown type: ${typeof value}`)
}

export function isNotEmpty<T>(value: T | undefined | null): value is T {
  return !isEmpty(value)
}
