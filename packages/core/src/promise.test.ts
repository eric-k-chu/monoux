import { filterEmptyPromises } from './promise'

describe('promise', () => {
  it('should filter empty promises', async () => {
    const foo = [Promise.resolve('foo'), Promise.resolve(undefined), Promise.resolve('bar')]
    const result = await filterEmptyPromises(foo)
    expect(result).toEqual(['foo', 'bar'])
  })
})
