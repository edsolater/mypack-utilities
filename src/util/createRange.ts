/**
 * 生成一个范围的数组
 * @example
 * createRange({from: 3, to: 10}) // [3,4,5,6,7,8,9,10]
 */
export const createRange = (
  config: {
    /**
     * 指定开头的值
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
  } = {}
) => {
  const { length = 10 } = config
  const { from = (config.to || 0) - length } = config
  const { to = (config.from || 0) + length } = config
  return Array.from({ length: to - from }, (_, idx) => idx + from)
}


