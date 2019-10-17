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
 * @param {number} v1
 * @param {number} v2
 * @param {number} epsilon
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon
