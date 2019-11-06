
/**
 * 检测数值出现次数
 * @example
 * count([1, 2, 3, 123, 12, 2, 1, 45, 5, 3], { countTargets: [45] }); // 1
 */
export const count = <T>(
  arr: T[],
  config: {
    /**
     * 统计的目标
     */
    countTarget?: T
    countTargets?: T[]
  } = {}
): number => {
  const { countTarget, countTargets = [countTarget] } = config
  return arr.reduce((acc, cur) => (countTargets.includes(cur) ? acc + 1 : acc), 0)
}

/**
 * 按条件(judger)数组中的某些值
 * @example
 * T0$N_count([1, 2, 3, 123, 12, 2, 1, 45, 5, 3], { countTargets: [45] }); // 1
 */
export const T0$N_count = count
