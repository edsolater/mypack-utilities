import { Mapper } from './#package_type'
import { defaultMapper } from './#package_defaultFunction'

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
    by?: Mapper
  } = {}
) => {
  const { by = defaultMapper } = config
  return (
    Number(
      nums
        .filter(Boolean)
        .map(by)
        .reduce((acc: number, Tar: number) => acc + Tar, 0)
    ) / nums.length
  )
}
