import { Mapper } from './#package_type'

/**
 *
 * 查找两个数组之间的差集
 * @example
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
export const difference = <T1, T2>(
  arr1: T1[],
  arr2: T2[],
  config: {
    /**
     * 预处理器
     */
    mapper?: Mapper
  } = {}
) => {
  const { mapper } = config
  if (mapper) {
    arr1 = arr1.map(mapper)
    arr2 = arr2.map(mapper)
  }
  const s = new Set(arr2)
  return arr1.filter((val: any) => !s.has(val))
}
