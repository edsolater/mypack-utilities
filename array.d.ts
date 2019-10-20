// 这些函数均不会改变引用，是安全的
declare type value = any
declare type callbackId = any
declare type callback<T> = (
  value: T,
  index: number,
  array: T[]
) => void | callbackId //同步回调无返回值，异步回调返回函数的ID
declare type judger<T> = (value: T) => boolean // 判断单值是否符合条件的简单函数

/**
 * 布尔全等判断
 * @param judger 判断函数
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
declare const all: <T>(arr: T[], judger?: judger<T>) => boolean // TODO: test logic \ fix declaration
/**
 * 检查数组各项相等
 * @param {any[]} arr
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
declare const allEqual: (arr: any) => any // TODO: test logic \ fix declaration
/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
declare const approximatelyEqual: (
  v1: number,
  v2: number,
  epsilon?: number
) => boolean // TODO: test logic \ fix declaration
/**
 * 去除固定位置的值
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
declare const drop: (arr: any, filter: any) => any // TODO: test logic \ fix declaration
/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const castArray: (val: any) => any[] // TODO: test logic \ fix declaration
/**
 * 去除数组中的否值类型
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const compact: (arr: any) => any // TODO: test logic \ fix declaration
/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const compactWithout0: (arr: any) => any // TODO: test logic \ fix declaration
/**
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
declare const countOccurrences: (arr: any, countValue: any) => any // TODO: test logic \ fix declaration
/**
 * 递归式地扁平化数组
 * @example
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */
declare const deepFlatten: (arr: any[]) => any // TODO: test logic \ fix declaration
/**
 * @alias deepFlatten
 */
declare const flattenRecursively: (arr: any[]) => any // TODO: test logic \ fix declaration
/**
 *
 * 指定深度地扁平化数组
 * @example
 * flatten([1, [2], [[3], 4], 5], 3); // [1,2,3,4,5]
 */
declare const flatten: (arr: any[], depth?: number ) => any[]
/**
 * 查找两个数组之间的差异项
 * @example
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
declare const difference: (arr1: any, arr2: any) => any[] // TODO: test logic \ fix declaration
/**
 * 先使用方法，再查找两个数组之间的差异项
 * @example
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
 * differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
 */
declare const differenceBy: (arr1: '2', arr2: any, fn: any) => any[] // TODO: test logic \ fix declaration
