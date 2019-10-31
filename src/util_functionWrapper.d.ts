/**
 * **TODO**：每个工具函数文件内都有各自的judger，不应该集中于function
 */
/** judger
 *--------------------------------
 * 返回布尔值以判断数据是否符合条件
 * 时常被用于高阶函数
 *
 */
export declare const isTrusy: BooleanConstructor
export declare const isFalsy: (val: any) => boolean
export declare const isTrue: (val: any) => boolean
export declare const isFalse: (val: any) => boolean
export declare const isFilledArray: (val: any) => boolean
/**
 * @example
 * is(true) === isTrue
 * is(false) === isFalse
 * [3,3,3].every(is(3)) // true
 */
export declare const is: (shouldValue: any) => (val: any) => boolean
