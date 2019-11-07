import { defaultJudger } from './#package_defaultFunction'
import { Judger } from './#package_type'

/**
 * 类似于Array.prototype.find，但是是寻找所有的可能
 */
export const findAll = <T>(
  arr: T[],
  config: {
    /**
     * 判断条件
     */
    judger?: Judger
  } = { judger: defaultJudger }
): T[] => {
  const { judger } = config
  return arr.reduce((acc, tar) => {
    if (judger(tar)) acc.push(tar)
    return acc
  }, [])
}

