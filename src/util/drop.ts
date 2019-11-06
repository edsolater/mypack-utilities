import { Judger } from './#package_type'

/**
 * 按条件(judger)数组中的某些值
 * @example
 * drop(['hello', 0, 1, true], { dropItems: [0] }) // ['hello', 1, true]
 */
export const drop = <T>(
  arr: T[],
  config: {
    /**
     * 需要去除的元素（其实是个创建临时judger的快捷方式）
     */
    dropItems?: T[]
    /**
     * 去除元素的条件
     */
    judger?: Judger
  } = {}
) => {
  const { dropItems, judger } = config
  return arr.filter((tar) => judger(tar) || !dropItems.includes(tar))
}
