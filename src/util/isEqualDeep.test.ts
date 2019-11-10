import { isEqualDeep } from './isEqualDeep'

test(`deep compare object`, () => {
  expect(isEqualDeep({ a: { b: { c: 'hello' } } }, { a: { b: { c: 'hello' } } })).toBe(true)
})
test(`compare primitive`, () => {
  expect(isEqualDeep(12, 12)).toBe(true)
  expect(isEqualDeep('hello world', 'hello world')).toBe(true)
})
test(`deep compare array`, () => {
  expect(isEqualDeep([1, [1, 2]], [1, [1, 2]])).toBe(true)
})
test(`not deep equal`, () => {
  expect(isEqualDeep(12, 2)).toBe(false)
  expect(isEqualDeep('hello world', 2)).toBe(false)
  expect(isEqualDeep([1, 2], [3, 4])).toBe(false)
  expect(isEqualDeep({ a: { b: { c: 'hello' } } }, {})).toBe(false)
})
