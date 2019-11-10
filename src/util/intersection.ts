import { Mapper, Comparator } from './#package_type'

/**
 * 求两数组的交集
 * @example
 * intersection([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], {comparator:(a, b) => Math.round(a) === Math.round(b)}); // [1.5, 3, 0]
 */
export const intersection = <T1, T2>(
  arr1: T1[],
  arr2: T2[],
  config: {
    /**
     * 预处理器
     */
    mapper?: Mapper
    comparator?: Comparator
  } = {}
): (T1 & T2)[] => {
  const { mapper, comparator } = config
  if (mapper) {
    arr1 = arr1.map(mapper)
    arr2 = arr2.map(mapper)
  }
  if (comparator) {
    return arr1.filter((x) => arr2.some((y) => comparator(x, y))) as (T1 & T2)[]
  }
  const s: any = new Set(arr2)
  return arr1.filter(s.has) as (T1 & T2)[]
}

const a = intersection([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9])
console.log('a')