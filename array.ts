/**
 * 布尔全等判断
 * @param {any[]} arr
 * @param {function} [fn]
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
const all = (arr, fn = Boolean) => arr.every(fn)

/**
 * 检查数组各项相等
 * @param {any[]} arr
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
const allEqual = arr => arr.every(val => val === arr[0])

/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
const approximatelyEqual = (v1:number, v2:number, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon

/**
 * 去除固定位置的值
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
const drop = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])

/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const castArray = val => (Array.isArray(val) ? val : [val])

/**
 * 去除数组中的否值类型
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const compact = arr => arr.filter(Boolean)

/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const compactWithout0 = arr =>
  arr.filter(val => (val === 0 ? val : Boolean(val)))

/**
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = (arr, countValue) =>
  arr.reduce(
    (acc, currentVal) => (currentVal === countValue ? acc + 1 : acc),
    0
  )
/**
 * 递归式地扁平化数组
 * @example
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */
