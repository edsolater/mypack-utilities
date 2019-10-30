import { utilCreator } from './_utilCreator.js'
/**
 * 取平均值
 * @param {number[]} nums
 * @example
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * average([1, 2, 3]); // 2
 */
const average = utilCreator({
  utilName: 'average',
  utilCode: {
    'number[]': (...nums) =>
      nums.filter(Boolean).reduce((acc, val) => acc + val, 0) / nums.length
  }
})

/**
 * 取平均值（带操作，单只能以数组形式传递）
 * @param {any[]} targetArray
 * @param {Function} mapper
 * @example
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
 */
const averageBy = (targetArray, mapper) => targetArray.map(mapper)

/**
 * 在指定范围之间生成随机数
 * @example
 * random() // [2,4,5,2,6,7,8,0,2,6]
 */
const random = (length = 10, range = [1, 10]) =>
  Array.from({ length }, () =>
    Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0])
  )

const sumTwo = (x, y) => Number(x) + Number(y)
const sum = (...nums) => nums.reduce(sumTwo)
console.log(3)
console.log(average(3, 4, 5, 2, 4))
