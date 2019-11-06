import { Compatator } from './#package_type'
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
    with?: Compatator
  } = { with: defaultCompatator }
): number[] => {
  const { item, with: compatator } = config
  return arr.reduce((acc, tar, idx) => {
    if (compatator(tar, item)) acc.push(idx)
    return acc
  }, [])
}

export const T0$N0_findIndexAll = findIndexAll