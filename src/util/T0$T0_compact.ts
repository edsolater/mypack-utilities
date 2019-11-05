import { UnaryUtil, Tar, Judger } from './##core_type'

/**
 * 按条件(judger)数组中的某些值
 * @example
 * compact(['hello', 0, 1, true], { dropItems: [0] }) // ['hello', 1, true]
 */
export const compact = (
  arr: Tar[],
  config: {
    /**
     * 需要去除的元素（其实是个创建临时judger的快捷方式）
     */
    dropItems?: Tar[]
    /**
     * 去除元素的条件
     */
    judger?: Judger
  } = {}
) => {
  const { dropItems, judger } = config
  const temporaryJudger = dropItems ? (Tar: Tar) => !dropItems.includes(Tar) : Boolean
  return arr.filter(judger || temporaryJudger)
}

/**
 * 按条件(judger)数组中的某些值
 * @example
 * T0$T0_compact(['hello', 0, 1, true], { dropItems: [0] }) // ['hello', 1, true]
 */
export const T0$T0_compact: UnaryUtil<typeof compact> = compact
