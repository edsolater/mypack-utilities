import { ZeroUtil } from './##core_type'

/**
 * 生成一个范围的数组
 * @example
 * range({from: 3, to: 10}) // [3,4,5,6,7,8,9,10]
 */
export const range = (
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
  const { from = 0, length = 10, to = from + length } = config
  return Array.from({ length: to - from }, (_, idx) => idx + from)
}

/**
 * 生成一个范围的数组
 * @example
 * _$N0_range({from: 3, to: 10}) // [3,4,5,6,7,8,9,10]
 */
export const _$N0_range: ZeroUtil<typeof range> = range
