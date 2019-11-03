import { utilCreator } from './_utilCreator.js'
import { emptyMapper } from './util_unknown.js'

export const average = utilCreator({
  utilName: 'average',
  utilType: ['infinaryUtil', 'judger'],
  utilCode: {
    'number[]': (nums, { by, mapper = by } = {}) => {
      console.log('nums: ', nums)
      return (
        nums
          .filter(Boolean)
          .map(mapper || emptyMapper)
          .reduce((acc, val) => acc + val, 0) / nums.length
      )
    }
  }
})

export const random = utilCreator({
  utilName: 'random',
  utilType: 'zeroUtil',
  utilCode: {
    'any': ({ from = 0, length = 10, to = from + length, int = false } = {}) => {
      const newRandom = Math.random() * (to - from) + from
      return int ? Math.floor(newRandom) : newRandom
    }
  }
})

export const range = utilCreator({
  utilName: 'range',
  utilType: 'zeroUtil',
  utilCode: {
    'any': ({ from = 0, length = 10, to = from + length } = {}) =>
      Array.from({ length: to - from }, (_, idx) => idx + from)
  }
})

export const mathEqual = utilCreator({
  utilName: 'mathEqual',
  utilType: ['binaryUtil', 'judger'],
  utilCode: {
    'number,number': (x = 1, y = 1, {} = {}) => {
      return Math.abs(x - y) < Number.EPSILON
    }
  }
})
