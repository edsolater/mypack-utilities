/**
 * 布尔全等判断
 * @param {any[]} arr
 * @param {function} [fn]
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
var all = function (arr, fn) {
    if (fn === void 0) { fn = Boolean; }
    return arr.every(fn);
};
/**
 * 检查数组各项相等
 * @param {any[]} arr
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
var allEqual = function (arr) { return arr.every(function (val) { return val === arr[0]; }); };
/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
var approximatelyEqual = function (v1, v2, epsilon) {
    if (epsilon === void 0) { epsilon = 0.001; }
    return Math.abs(v1 - v2) < epsilon;
};
/**
 * 去除固定位置的值
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
var drop = function (arr, filter) {
    return arr.reduce(function (acc, val, i) { return (acc[filter[i] ? 0 : 1].push(val), acc); }, [[], []]);
};
/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
var castArray = function (val) { return (Array.isArray(val) ? val : [val]); };
/**
 * 去除数组中的否值类型
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
var compact = function (arr) { return arr.filter(Boolean); };
/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
var compactWithout0 = function (arr) {
    return arr.filter(function (val) { return (val === 0 ? val : Boolean(val)); });
};
/**
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
var countOccurrences = function (arr, countValue) {
    return arr.reduce(function (acc, currentVal) { return (currentVal === countValue ? acc + 1 : acc); }, 0);
};
/**
 * 其他类型转数组
 * @param {[]} arr
 * @param {*} filter
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
