import { Comparator } from './#package_type'

/**
 * 检查数组各项相等
 * @example
 * allTheSame([1, 2, 3, 4, 5, 6]); // false
 * allTheSame([1, 1, 1, 1]); // true
 */
export const allTheSame = (
  tars: any[],
  config: {
    /**
     * 比较各项值，默认二阶判断因子为 Object.is
     */
    comparator?: Comparator
  } = {}
) => {
  const { comparator = Object.is } = config
  return tars.every((tar) => comparator(tar, tars[0]))
}
