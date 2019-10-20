/**
 * 布尔全等判断
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
const all = (arr, fn = Boolean) => arr.every(fn)

/**
 * 检查数组各项相等
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
const allEqual = arr => arr.every(val => val === arr[0])

/**
 * 约等于
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
const approximatelyEqual = (v1 = 1, v2 = 1, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon

/**
 * 去除固定位置的值
 * @param {[]} arr
 * @param {*} filterArray
 * @example
 * drop(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
const drop = (arr, filterArray) =>
  arr.reduce((acc, val, i) => (acc[filterArray[i] ? 0 : 1].push(val), acc), [
    [],
    []
  ])

/**
 * 包装成数组
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const castArray = val => (Array.isArray(val) ? val : [val])

/**
 * 去除数组中的否值类型
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const compact = arr => arr.filter(Boolean)

/**
 * 去除数组中的否值类型（除了数字0）
 * @param {any[]} arr
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 * castArray(1); // [1]
 */
const compactWithout0 = arr =>
  arr.filter(val => (val === 0 ? val : Boolean(val)))

/**
 *
 * 检测数值出现次数
 * @typedef T
 * @param {any[]} arr
 * @param {T} countValue
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = (arr, countValue) =>
  arr.reduce(
    (acc, currentVal) => (currentVal === countValue ? acc + 1 : acc),
    0
  )

/**
 *
 * 递归式地扁平化数组
 * @example
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */
const deepFlatten = arr =>
  arr.map(val => (Array.isArray(val) ? deepFlatten(val) : val))
/**
 *
 * @alias deepFlatten
 */
const flattenRecursively = deepFlatten

/**
 *
 * 指定深度地扁平化数组
 * @example
 * flatten([1, [2], [[3], 4], 5], 3); // [1,2,3,4,5]
 */
const flatten = (arr, depth = 1) => arr.flat(depth)

/**
 *
 * 查找两个数组之间的差异项
 * @example
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
const difference = (arr1, arr2) => {
  const s = new Set(arr2)
  return arr1.filter(val => !s.has(val))
}

/**
 *
 * 先使用方法，再查找两个数组之间的差异项
 * @example
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
 * differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
 */
const differenceBy = (arr1, arr2, mapper) => {
  const s = new Set(arr2.map(mapper))
  return arr1.map(mapper).filter(val => !s.has(val))
}

/**
 *
 * 删除直到符合条件位置的不符合条件的值
 * @example
 * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
 */
const dropWhile = ([...arr], judger) => {
  for (let i = 0; i < arr.length; i++) {
    if (judger(arr[i])) {
      return arr.slice(i)
    }
  }
}
/**
 *
 * 返回数组中某值的所有索引
 * @example
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
 * indexOfAll([1, 2, 3], 4); // []
 */
const indexOfAll = (arr = [], val) =>
  arr.reduce((acc, cur) => {
    if (cur === val) {
      acc.push(cur)
    }
    return acc
  }, [])

/**
 * 求两数组的交集
 * @example
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 */
const intersection = (arr1, arr2) => {
  const s = new Set(arr2)
  return arr1.filter(s.has) // 待检验
}
/**
 * TODO：有否真有必要？
 * 先执行mapper，再交集运算
 * @example
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
 */
const intersectionBy = (arr1, arr2, mapper) => {
  const s = new Set(arr2.map(mapper))
  return arr1.filter(x => s.has(mapper(x)))
}
/**
 * TODO：有否真有必要？（利用JavaScript的灵活，给intersection一个可选的第三函数即可）
 * 依据规则，进行交集运算
 * @example
 * intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
 */
const intersectionWith = (arr1, arr2 = [], comparer) =>
  arr1.filter(x => arr2.some(y => comparer(x, y)))

/**
 * 返回指定长度的升序数组
 * @example
 * minN([1, 2, 3]); // [1]
 * minN([1, 2, 3], 2); // [1,2]
 */
const minN = arr => [...arr].sort((x, y) => x - y).slice(0, n)

/**
 * 随机获取数组中的一个值
 * @example
 * sample([3, 7, 9, 11]); // 9
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)]

/**
 * “洗牌”数组
 * @mutate
 * @example
 * shuffle([2,3,4,5,6]) // [3,5,2,6,4]
 */
const shuffle = arr => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
