import { InfinaryUtil, ConfigObj, ZeroUtil, BinaryUtil } from './_utilCreator'
import { Mapper } from './_util_type_bucket'

/**
 * 取平均值
 * @example
 * average(1, 2, 3); // 2
 * average({ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }, {by: o => o.n}) // 5
 */
export declare const un_Average: InfinaryUtil<(nums: number[], config?: { by: Mapper }) => number>

/**
 * 生成一个随机值
 * @example
 * random({max: 20}) // 13.915759733207409
 */
export declare const random: ZeroUtil<
  (config?: {
    /**
     * 指定可取到的最小值
     * 一般来不用手动设定
     * 默认为0
     */
    from: number
    /**
     * 指定可取到的最大值
     */
    to: number
    /**
     * 指定数量（生成的数组长度）
     * 指定 to 时 length 无效
     */
    length: number
    /**
     * 只输出整数
     */
    int: boolean
  }) => number
>

/**
 * 生成一个范围的数组
 * @example
 * range({from: 3, to: 10}) // [3,4,5,6,7,8,9,10]
 */
export declare const range: ZeroUtil<
  (config?: {
    /**
     * 指定开头的值
     * 一般来不用手动设定
     * 默认为0
     */
    from: number
    /**
     * 指定末尾的值
     */
    to: number
    /**
     * 指定数量（生成的数组长度）
     * 指定 to 时 length 无效
     */
    length: number
  }) => number[]
>

/**
 * 约等于
 * @example
 * mathEqual(Math.PI / 2.0, 1.5708); // true
 */
export declare const mathEqual: BinaryUtil<(x: number, y: number) => boolean>
