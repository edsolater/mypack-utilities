import { Comparator } from './#package_type'
import { defaultCompatator } from './#package_defaultFunction'

/**
 * 类似于Array.prototype.findIndex，但是是寻找所有的可能
 */
export const findIndexAll = <T>(
  arr: T[],
  config: {
    /**
     * 目标
     */
    item?: T
    /**
     * 用于比较的函数
     */
    compatator?: Comparator
  } = { compatator: defaultCompatator }
): number[] => {
  const { item, compatator } = config
  return arr.reduce((acc, tar, idx) => {
    if (compatator(tar, item)) acc.push(idx)
    return acc
  }, [])
}
