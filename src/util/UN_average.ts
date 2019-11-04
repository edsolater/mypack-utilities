import { Mapper, emptyMapper, UnaryUtil } from './core_type'

const average = (
  nums: number[],
  {
    before = emptyMapper
  }: {
    /**
     * 处理之前的Mapper
     */
    before?: Mapper
  } = {}
) => {
  return (
    Number(
      nums
        .filter(Boolean)
        .map(before || emptyMapper)
        .reduce((acc: number, val: number) => acc + val, 0)
    ) / nums.length
  )
}

export const UN_average: UnaryUtil<typeof average> = average
