import { Util } from './#package_type'
import { toCase } from './toCase'
/**
 * 固定函数的部分参数
 * @todo
 * @example
 * fixParam(add, [3, 1], [4, 2]) = num => add(num, 3, 4)
 */
export const fixParam = <U extends Util, N extends number>(
  util: U,
  { parameters }: { parameters: { index: N; param: Parameters<U>[N] }[] }
) => (...args:Parameters<U>|[]): ReturnType<U> => {
  parameters
    .sort((a, b) => a.index - b.index)
    .forEach(({ index, param }) => {
      args.splice(index, 0, param)
    })
  return util(...args)
}
const foo = fixParam(toCase, {
  parameters: [{ index: 0, param: 'Hello' }, { index: 1, param: { formatType: 'camelCase' } }]
})

console.log(foo())