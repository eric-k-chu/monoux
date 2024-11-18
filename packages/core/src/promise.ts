import { isNotEmpty } from './empty'

export async function filterEmptyPromises<T>(promises: Promise<T | undefined>[]): Promise<T[]> {
  const items = await Promise.all(promises)
  return items.filter(isNotEmpty)
}
