/**
 * 取平均值
 * @param {number[]} nums
 * @example
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * average([1, 2, 3]); // 2
 */
const average = (...nums) =>
  nums.flat().reduce((acc, val) => acc + val, 0) / nums.length

/**
 * 取平均值（带操作，单只能以数组形式传递）
 * @param {any[]} targetArray
 * @param {Function} operationFn
 * @example
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
 */
const averageBy = (targetArray, operationFn) => targetArray.forEach(operationFn)

