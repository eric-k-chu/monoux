import { isEmpty } from './empty'

type TestCase = {
  input: unknown
  expected: boolean
}

describe('empty', () => {
  const testCases: TestCase[] = [
    { input: null, expected: true },
    { input: undefined, expected: true },
    { input: '', expected: true },
    { input: ' ', expected: true },
    { input: 0, expected: true },
    { input: 1, expected: false },
    { input: Number.NaN, expected: true },
    { input: [], expected: true },
    { input: [1], expected: false },
    { input: {}, expected: true },
    { input: { a: 1 }, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
  ]

  for (const testCase of testCases) {
    it(`should return ${testCase.expected} for ${JSON.stringify(testCase.input)}`, () => {
      expect(isEmpty(testCase.input)).toBe(testCase.expected)
    })
  }

  it('should throw an error for symbol', () => {
    expect(() => isEmpty(Symbol())).toThrow('Unknown type: symbol')
  })

  it('should throw an error for bigint', () => {
    expect(() => isEmpty(BigInt(1))).toThrow('Unknown type: bigint')
  })

  it('should throw an error for function', () => {
    expect(() => isEmpty(() => {})).toThrow('Unknown type: function')
  })
})
