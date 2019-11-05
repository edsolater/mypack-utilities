import { Mapper, emptyMapper, UnaryUtil } from './##core_type'

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
        .reduce((acc: number, Tar: number) => acc + Tar, 0)
    ) / nums.length
  )
}

/**
 * 取平均值
 * @example
 * N0$N_average([1, 2, 3]); // 2
 */
export const N0$N_average: UnaryUtil<typeof average> = average
