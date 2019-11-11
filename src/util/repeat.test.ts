import { repeat } from './repeat'

describe('一般性用法', () => {
  test(`情况1`, () => {
    expect(repeat(1, { repeatTime: 2 })).toEqual([1, 1])
  })
  test(`情况2`, () => {
    expect(repeat('a', { repeatTime: 2 })).toEqual(['a', 'a'])
  })
  test(`情况3`, () => {
    expect(repeat([2, 3], { repeatTime: 2 })).toEqual([[2, 3], [2, 3]])
  })
  test(`情况4`, () => {
    expect(repeat({ a: 'hello' }, { repeatTime: 2 })).toEqual([{ a: 'hello' }, { a: 'hello' }])
  })
})
