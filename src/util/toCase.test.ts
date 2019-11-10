import { toCase } from './toCase'

test("turn 'hello world' to 'HelloWorld'", () => {
  expect(toCase('hello world', { formatType: 'PascalCase' })).toBe('HelloWorld')
})
test("turn 'hello world' to 'helloWorld'", () => {
  expect(toCase('hello world', { formatType: "camelCase" })).toBe('helloWorld')
})
test("turn 'hello world' to 'hello world'", () => {
  expect(toCase('hello world', { formatType: 'white space' })).toBe('hello world')
})
test("turn 'hello world' to 'hello-world'", () => {
  expect(toCase('hello world', { formatType: 'kebab-case' })).toBe('hello-world')
})
test("turn 'hello world' to 'hello_world'", () => {
  expect(toCase('hello world', { formatType: 'snack_case' })).toBe('hello_world')
})
