import { toCase } from './toCase'

test("'hello world' in PascalCase", () => {
  const str = 'hello world'
  expect(toCase(str, { formatType: 'PascalCase' })).toBe('HelloWorld')
})
