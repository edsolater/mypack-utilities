import { Mapper } from './#package_type'
import { defaultMapper } from './#package_defaultFunction'

/**
 *
 * 查找两个数组之间的并集
 * @example
 * union([1, 2, 3], [1, 2, 4]); // [1, 2, 3, 4]
 */
export const union = <T1, T2, Union>(
  arr1: T1[],
  arr2: T2[],
  config: {
    /**
     * 预处理器
     */
    mapper?: Mapper
  } = {}
) => {
  const { mapper = defaultMapper } = config
  if (mapper) {
    arr1 = arr1.map(mapper)
    arr2 = arr2.map(mapper)
  }
  return [...new Set([...arr1, ...arr2])]
}
