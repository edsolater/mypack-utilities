import { utilCreator } from './_utilCreator.js'
import { emptyMapper } from './util_unknown.js'

export const average = utilCreator({
  utilName: 'average',
  utilType: ['infinaryUtil', 'judger'],
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
// const random = (length = 10, range = [1, 10]) =>
//   Array.from({ length }, () => Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0]))

const sumTwo = (x = 0, y = 0) => Number(x) + Number(y)
const sum = (...nums) => nums.reduce(sumTwo)

console.log('array: ', Array.from({ length: 10 - 2 + 1 }, (_, idx) => idx + 2))
export const range = utilCreator({
  utilName: 'range',
  utilType: 'unaryUtil',
  utilCode: {
    'number': (length = 10, { from = 0, to = from + length } = {}) =>
      Array.from({ length: (to && to - from) || length }, (_, idx) => idx + from)
  }
})
const random = utilCreator({
  utilName: 'random',
  utilType: 'zeroUtil',
  utilCode: {
    'any': ({ max } = {}) => Math.random() * max
  }
})
console.log(random({max:20}))

/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
const approximatelyEqual = utilCreator({
  utilName: 'approximatelyEqual',
  utilType: ['binaryUtil', 'judger'],
  utilCode: {
    'number,number': (v1 = 1, v2 = 1, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon
  }
})
