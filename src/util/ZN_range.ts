/**
 * 生成一个范围的数组
 * @example
 * range({from: 3, to: 10}) // [3,4,5,6,7,8,9,10]
 */
export const range = ({
  from = 0,
  length = 10,
  to = Number(from + length)
}: {
  /**
   * 指定可取到的最小值
   * 一般来不用手动设定
   * 默认为0
   */
  from?: number
  /**
   * 指定末尾的值
   */
  to?: number
  /**
   * 指定数量（生成的数组长度）
   * 指定 to 时 length 无效
   */
  length?: number
} = {}): number[] => {
  return Array.from({ length: to - from }, (_, idx) => idx + from).map(Number)
}
