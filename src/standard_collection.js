import { utilCreator } from './_utilCreator.js'
import { type, isDefined } from './util_unknown'

// 这两个方法都不是谓语动词，是不是会增加心智负担，用作util不合适？
export const all = utilCreator({
  utilName: 'all',
  isJudger: true,
  utilCode: {
    'Array': (arr, { judger } = {}) => arr.every(judger)
  }
})

// 这两个方法都不是谓语动词，是不是会增加心智负担，用作util不合适？
//我总觉得这个跟上一个all方法调性不符
export const allEqual = utilCreator({
  utilName: 'allEqual',
  isJudger: true,
  utilCode: {
    'Array': arr => arr.every(val => val === arr[0])
  }
})

export const remove = utilCreator({
  utilName: 'remove',
  utilCode: {
    'Array': ([...arr], { indexes = [] } = {}) => {
      indexes.forEach(idx => (arr[idx] = undefined))
      return arr.filter(isDefined)
    },
    'Object': ({ ...obj }, { propNames = [] } = {}) => {
      propNames.forEach(propName => {
        delete obj[propName]
      })
      return obj
    }
  }
})

export const compact = utilCreator({
  utilName: 'compact',
  utilCode: {
    'Array': (arr, { dropItems, judger } = {}) => {
      const temporaryJudger = dropItems ? val => !dropItems.includes(val) : Boolean
      return arr.filter(judger || temporaryJudger)
    }
  }
})

export const count = utilCreator({
  utilName: 'count',
  utilCode: {
    'Array': (arr, { targetValue, targetValues = [targetValue] } = {}) => {
      return arr.reduce((acc, cur) => (targetValues.includes(cur) ? acc + 1 : acc), 0)
    }
  }
})

export const flatten = utilCreator({
  utilName: 'flatten',
  utilCode: {
    'Array': function flatten_core(arr, config = {}) {
      const { depth, judger, mode = 'mutable' } = config
      if (depth) return targetArray.flat(depth)
      const newArr = judger ? arr.filter(judger) : arr
      if (mode == 'immutable') {
        return [].concat(...newArr.map(v => (type(v) === 'Array' ? flatten_core(v, config) : v)))
      }
      if (mode == 'mutable') {
        let i = 0
        while (newArr[i] !== undefined) {
          if (type(newArr[i]) === 'Array') {
            newArr.splice(i, 1, ...flatten_core(newArr[i], config))
          } else {
            i += 1
          }
        }
        return newArr
      }
    }
  }
})

export const find = utilCreator({
  utilName: 'find',
  utilCode: {
    'Array': (
      arr,
      { findAll = true, findOne = !findAll, targetValue, targetValues = [targetValue] } = {}
    ) => {
      if (findOne) {
        return arr.findIndex(val => targetValues.includes(val))
      } else {
        return arr.reduce((acc, cur, idx) => {
          if (targetValues.includes(cur)) {
            acc.push(idx)
          }
          return acc
        }, [])
      }
    }
  }
})

/**
 * “洗牌”数组
 * @mutate
 * @example
 * shuffle([2,3,4,5,6]) // [3,5,2,6,4]
 */
export const shuffle = utilCreator({
  utilName: 'shuffle',
  utilCode: {
    'Array': arr => {
      let cur = arr.length - 1
      while (cur) {
        const i = Math.floor(Math.random() * cur)
        ;[arr[cur], arr[i]] = [arr[i], arr[cur]]
        cur -= 1
      }
      return arr
    }
  }
})



const core_pickRandomly_pickOne = arr => arr[Math.floor(Math.random() * arr.length)]
const core_pickRandomly_pickMulti = (arr, pickNumber) => shuffle([...arr]).slice(0, pickNumber)
export const pickRandomly = utilCreator({
  utilName: 'pickRandomly',
  utilCode: {
    'Array': function ca(arr, { pickNumber = 1 }) {
      if (pickNumber === 1) {
        return core_pickRandomly_pickOne(arr)
      } else {
        return core_pickRandomly_pickMulti(arr, pickNumber)
      }
    },
    'Object': (obj, { onlyValue = true, shouldEntry = !onlyValue }) => {
      if (shouldEntry) {
        return core_pickRandomly_pickOne(Object.entries(obj))
      } else {
        return core_pickRandomly_pickOne(Object.values(obj))
      }
    }
  }
})

/************对象************ */

/**
 * TODO: 暂时没看懂
 * 以键的路径扁平化对象
 * @example
 * flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + '.' : ''
    if (typeof obj[key] === 'object') Object.assign(acc, flattenObject(obj[key], pre + key))
    else acc[pre + key] = obj[key]
    return acc
  }, {})
/**
 * TODO: 暂时没看懂
 * 以键的路径展开对象
 * @example
 * unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
 */
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.')
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      )
    } else acc[k] = obj[k]
    return acc
  }, {})

export const pluck = utilCreator({
  utilName: 'pluck',
  utilCode: {
    'Object': (obj, { propNames = [] }) => propNames.map(propName => obj[propName])
  }
})
