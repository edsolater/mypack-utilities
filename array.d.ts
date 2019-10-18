/**
 * 布尔全等判断
 * @param {any[]} arr
 * @param {function} [fn]
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
declare const all: (arr: any, fn?: BooleanConstructor) => any;
/**
 * 检查数组各项相等
 * @param {any[]} arr
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
declare const allEqual: (arr: any) => any;
/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
declare const approximatelyEqual: (v1: number, v2: number, epsilon?: number) => boolean;
/**
 * 去除固定位置的值
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
declare const drop: (arr: any, filter: any) => any;
/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const castArray: (val: any) => any[];
/**
 * 去除数组中的否值类型
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const compact: (arr: any) => any;
/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
declare const compactWithout0: (arr: any) => any;
/**
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
declare const countOccurrences: (arr: any, countValue: any) => any;
/**
 * 其他类型转数组
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
