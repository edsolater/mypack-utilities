import { filter } from './filter'
import { convertMethodToUtil } from './convertMethodToUtil'

test('基本用法', () => {
  expect(
    filter(['hello', 'world'], {
      fns: [
        convertMethodToUtil(Array.prototype.join),
        convertMethodToUtil(String.prototype.toUpperCase)
      ]
    })
  ).toEqual('HELLO,WORLD')
})
