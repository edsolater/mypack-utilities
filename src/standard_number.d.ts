import { InfinaryUtil, ConfigObj } from './_utilCreator'
import { Mapper } from './_util_type_bucket'
/**
 * 对于Infinary来说：
 * *如果最后一项是对象，则识别其为configObj*
 * 因此，最后一个target是对象时，必须再传一个空对象，以规避上述规则
 */

/**
 * 取平均值
 * @param {number[]} nums
 * @example
 * average(1, 2, 3); // 2
 * average({ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }, {by: o => o.n}) // 5
 */
export declare const average: InfinaryUtil<(nums: number[], config?: { by: Mapper }) => number>
