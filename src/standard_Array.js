import { utilCreator } from './_utilCreator.js'
import { type } from './standard_any.js'
import { isDefined } from './standard_any.js'

/**
 * 布尔全等判断
 * @example
 * all([4, 2, 3], {judger: x => x > 1}); // true
 * all([1, 2, 3]); // true
 */
export const all = utilCreator({
    utilName: 'all',
    isJudger: true,
    utilCode: {
        'Array': (arr, { judger } = {}) => arr.every(judger)
    }
})

/**
 * 检查数组各项相等
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
const allEqual = utilCreator({
    utilName: 'allEqual',
    isJudger: true,
    utilCode: {
        'Array': arr => arr.every(val => val === arr[0])
    }
})

/**
 * 去除固定位置的值
 * @example
 * remove(['beep', 'boop', 'foo', 'bar'], {indexes:[1,2,0]}) // ['bar']
 * remove({a:'hello',b:'world', c:'haha'}, {propNames:['a','b']}) // {c:'haha'}
 */
const remove = utilCreator({
    utilName: 'remove',
    utilCode: {
        //TODO: **同一Util，不同类型参数的overload该怎么分类？**
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

/**
 * 去除数组中的否值类型
 */
const compact = utilCreator({
    utilName: 'compact',
    utilCode: {
        'Array': arr => arr.filter(Boolean)
    }
})

/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 */
const compactWithout0 = utilCreator({
    utilName: 'compactWithout0',
    utilCode: {
        'Array': arr => arr.filter(val => (val === 0 ? val : Boolean(val)))
    }
})

/**
 *
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = utilCreator({
    utilName: 'countOccurrences',
    utilCode: {
        'Array': (arr, { countValue } = {}) => {
            if (countValue) {
                return arr.reduce(
                    (acc, currentVal) => (currentVal === countValue ? acc + 1 : acc),
                    0
                )
            } else {
                return -1
            }
        }
    }
})

/**
 * 递归式地扁平化数组
 * - mutate 会深改变原数组
 *
 * @targetCount 1
 * @inputType Array
 * @outputType Array
 * @example
 * flatten([1, [2], [[3], 4], 6, 'hello']) // [ 1, 2, 3, 4, 6, "hello" ]
 * flatten([1, [2], [[[[[3]]]], undefined, [[[4]]]], 6, 'hello'], { depth: 2 }) //[ 1, 2, [ [ [ 3 ] ] ], undefined, [ [ 4 ] ], 6, "hello" ]
 * flatten([1, [2], [[[[3]]], [undefined], [[4]]], 6, 'hello'], { ignoreUndefined: true }) // [ 1, 2, 3, 4, 6, "hello" ]
 *
 */
export const flatten = utilCreator({
    utilName: 'flatten',
    utilCode: {
        'Array': function flatten_core(arr, config = {}) {
            const { depth, ignoreUndefined, codeVersion = 'mutable' } = config
            if (depth) return targetArray.flat(depth)
            const newArr = ignoreUndefined ? arr.filter(Boolean) : arr
            if (codeVersion == 'immutable') {
                return [].concat(
                    ...newArr.map(v => (type(v) === 'Array' ? flatten_core(v, config) : v))
                )
            }

            if (codeVersion == 'mutable') {
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

/**
 *
 * 返回数组中某值的所有索引
 * @example
 * findValueAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
 * findValueAll([1, 2, 3], 4); // []
 */
export const findValueAll = utilCreator({
    utilName: 'findValueAll',
    utilCode: {
        'Array': (arr, { valueToFind } = {}) =>
            arr.reduce((acc, cur) => {
                if (cur === valueToFind) {
                    acc.push(cur)
                }
                return acc
            }, [])
    }
})

/**
 * 随机获取数组中的一个值
 * @example
 * pickOne([3, 7, 9, 11]); // 9
 */
export const pickOne = utilCreator({
    utilName: 'pickOne',
    utilCode: {
        'Array': arr => arr[Math.floor(Math.random() * arr.length)]
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
