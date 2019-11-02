import { utilCreator } from './_utilCreator.js'
import { emptyMapper } from './util_unknown.js'
console.log(4)

export const average = utilCreator({
  utilName: 'average',
  isInfinaryUtil: true,
  utilCode: {
    'number[]': (nums, { by, mapper = by } = {}) => {
      return (
        nums
          .filter(Boolean)
          .map(mapper || emptyMapper)
          .reduce((acc, val) => acc + val, 0) / nums.length
      )
    }
  }
})


/**
 * 在指定范围之间生成随机数
 * @example
 * random() // [2,4,5,2,6,7,8,0,2,6]
 */
const random = (length = 10, range = [1, 10]) =>
  Array.from({ length }, () => Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0]))

const sumTwo = (x, y) => Number(x) + Number(y)
const sum = (...nums) => nums.reduce(sumTwo)
console.log(3)
console.log(average(3))
console.log(average([3, 4, 5, 2, 4]))

/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
const approximatelyEqual = utilCreator({
  utilName: 'approximatelyEqual',
  utilDepth: 2,
  isJudger: true,
  utilCode: {
    'number,number': (v1 = 1, v2 = 1, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon
  }
})
