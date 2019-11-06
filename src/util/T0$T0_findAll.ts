import { Judger } from 'src/trash/_utilCreator'
import { defaultJudger } from './#package_defaultFunction'

/**
 * 类似于Array.prototype.find，但是是寻找所有的可能
 */
export const findAll = <T>(
  arr: T[],
  config: {
    /**
     * 判断条件
     */
    when?: Judger
  } = { when: defaultJudger }
): number[] => {
  const { when } = config
  return arr.reduce((acc, tar) => {
    if (when(tar)) acc.push(tar)
    return acc
  }, [])
}

export const T0$T0_findAll = findAll
