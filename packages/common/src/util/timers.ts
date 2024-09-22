export function wait<T>(ms: number, cb: T): Promise<T> {
  return new Promise<T>((resolve) => setTimeout(() => resolve(cb), ms))
}
