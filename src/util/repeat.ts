/**
 * 重复给出的数据
 */
export const repeat = <T>(
  tar: T,
  config?: {
    /**
     * 重复输出的个数，默认为1次
     */
    repeatTime: number
  }
): T[] => Array(config.repeatTime || 1).fill(tar)
