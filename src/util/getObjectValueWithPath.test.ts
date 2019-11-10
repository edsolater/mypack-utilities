import { getObjectValueWithPath } from './getObjectValueWithPath'

const obj = { a: { b: { c: 'hello' } } }

test(`object: ${JSON.stringify(obj)} with path: 'a.b'`, () => {
  expect(getObjectValueWithPath(obj, { path: 'a.b' })).toEqual({ c: 'hello' })
})
test(`object: ${JSON.stringify(obj)} with path: 'a'`, () => {
  expect(getObjectValueWithPath(obj, { path: 'a' })).toEqual({ b: { c: 'hello' } })
})
test(`object: ${JSON.stringify(obj)} with path: 'a.b.c'`, () => {
  expect(getObjectValueWithPath(obj, { path: 'a.b.c' })).toEqual('hello')
})
test(`object: ${JSON.stringify(obj)} with path: ' '`, () => {
  expect(getObjectValueWithPath(obj, { path: ' ' })).toEqual({ a: { b: { c: 'hello' } } })
})
