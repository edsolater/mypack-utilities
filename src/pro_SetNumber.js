import { utilCreator } from './_utilCreator.js'

/**
 * **还没有实现这个class——数据的集合**
 */
/**
 *
 * 查找两个数组之间的差异项
 * @example
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
const difference = utilCreator({
    utilName: 'difference',
    utilDepth: 2,
    utilCode: {
        'Array,Array': ([...arr1], [...arr2], { by, mapper = by } = {}) => {
            if (mapper) {
                arr1 = arr1.map(mapper)
                arr2 = arr2.map(mapper)
            }
            const s = new Set(arr2)
            return arr1.filter(val => !s.has(val))
        }
    }
})

/**
 * 求两数组的交集
 * @example
 * intersection([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], {comparer:(a, b) => Math.round(a) === Math.round(b)}); // [1.5, 3, 0]
 */
const intersection = utilCreator({
    utilName: 'intersection',
    utilDepth: 2,
    utilCode: {
        'Array,Array': (
            [...arr1],
            [...arr2],
            { by, mapper = by, with: _with, comparer = _with } = {}
        ) => {
            if (mapper) {
                arr1 = arr1.mpa(mapper)
                arr2 = arr2.mpa(mapper)
            }
            if (comparer) {
                return arr1.filter(x => arr2.some(y => comparer(x, y)))
            }
            const s = new Set(arr2)
            return arr1.filter(s.has)
        }
    }
})
