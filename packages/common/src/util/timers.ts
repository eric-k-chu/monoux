export function wait<T>(value: T, ms: number): Promise<T> {
  return new Promise<T>((resolve) => setTimeout(() => resolve(value), ms))
}
