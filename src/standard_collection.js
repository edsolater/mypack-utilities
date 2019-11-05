import { utilCreator } from './_utilCreator.js'
import { getType, isDefined, assertType } from './util_unknown.js'


export const remove = utilCreator({
  utilName: 'remove',
  utilType: 'unaryUtil',
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
    // 不推荐使用，用 Array.prototype.flat(Infinity) 以提升效率
    'Array': function flatten_core(arr, config = {}) {
      const { depth, judger, mutable } = config
      if (depth) return targetArray.flat(depth)
      const newArr = judger ? arr.filter(judger) : arr
      if (mutable) {
        let i = 0
        while (newArr[i] !== undefined) {
          if (getType(newArr[i]) === 'Array') {
            newArr.splice(i, 1, ...flatten_core(newArr[i], config))
          } else {
            i += 1
          }
        }
        return newArr
      } else {
        return [].concat(...newArr.map(v => (getType(v) === 'Array' ? flatten_core(v, config) : v)))
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
 * @alias
 * @example
 * shuffle([2,3,4,5,6]) // [3,5,2,6,4]
 */
export const shuffle = utilCreator({
  utilName: 'shuffle',
  utilCode: {
    'Array': (arr, { mutable }) => {
      if (mutable) arr = [...arr]
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

export const flattenObject = utilCreator({
  utilName: 'flattenObject',
  utilCode: {
    'Object': function _flattenObject(obj, config = {}) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const { prefix, pathSlicer = '.' } = config
        const prefixedKey = prefix ? prefix + pathSlicer + key : key
        return Object.assign(
          acc,
          assertType(value, 'Object')
            ? _flattenObject(value, { ...config, prefix: prefixedKey })
            : { [prefixedKey]: value }
        )
      }, {})
    }
  }
})

export const unflattenObject = utilCreator({
  utilName: 'unflattenObject',
  utilCode: {
    'Object': function _unflattenObject(obj, config = {}) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const { pathSlicer = '.', restKey: oldRestKeys } = config
        const [firstKey, ...restKey] = oldRestKeys || key.split(pathSlicer)
        return Object.assign(
          acc,
          key.includes(pathSlicer)
            ? {
                [firstKey]: _unflattenObject(
                  { [restKey.join(pathSlicer)]: value },
                  { ...config, restKey }
                )
              }
            : { [key]: value }
        )
      }, {})
    }
  }
})

export const pluck = utilCreator({
  utilName: 'pluck',
  utilCode: {
    'Object': (obj, { propNames = [] }) => propNames.map(propName => obj[propName])
  }
})
