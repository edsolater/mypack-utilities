import { Mapper, emptyMapper, UnaryUtil } from './_core_type'

/**
 * 取平均值
 * @example
 * average([1, 2, 3]); // 2
 */
export const average = (
  nums: number[],
  config: {
    /**
     * 处理之前的Mapper
     */
    before?: Mapper
  } = {}
) => {
  const { before = emptyMapper } = config
  return (
    Number(
      nums
        .filter(Boolean)
        .map(before)
        .reduce((acc: number, val: number) => acc + val, 0)
    ) / nums.length
  )
}

/**
 * 取平均值
 * @example
 * U_N_average([1, 2, 3]); // 2
 */
export const U_N_average: UnaryUtil<typeof average> = average
