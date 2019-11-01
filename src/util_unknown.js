import { utilCreator } from './_utilCreator.js'

export const isFalsy = utilCreator({
  utilName: 'isFalsy',
  isJudger: true,
  utilCode: {
    'any': val => !Boolean(val)
  }
})
export const isTrusy = utilCreator({
  utilName: 'isTrusy',
  isJudger: true,
  utilCode: {
    'any': val => Boolean(val)
  }
})
export const isUndefined = utilCreator({
  utilName: 'isUndefined',
  isJudger: true,
  utilCode: {
    'any': val => val === undefined
  }
})
export const isDefined = utilCreator({
  utilName: 'isDefined',
  isJudger: true,
  utilCode: {
    'any': val => val !== undefined
  }
})

/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const castArray = utilCreator({
  utilName: 'castArray',
  utilCode: {
    'any': tar => (Array.isArray(tar) ? tar : [tar])
  }
})

/**
 * @returns {string}
 * @example
 * type(new Date()) // "Date"
 * type('hello') // "string"
 * type(1) // "number"
 */
export const getType = utilCreator({
  utilName: 'getType',
  utilCode: {
    'any': val => {
      if (typeof val === 'object') {
        return Object.prototype.toString.call(val).slice(8, -1)
      } else {
        return typeof val
      }
    }
  }
})

/**
 * getType 的补充版
 */
export const assertType = utilCreator({
  utilName: 'assertType',
  utilCode: {
    'any.string': (val, typeString) => type(val) === typeString
  }
}) //TODO: 这个propName坑定会出错的

const isObject = utilCreator({
  utilName: 'isObject',
  isJudger: true,
  utilCode: {
    'any': val => typeof val === 'object'
  }
})
