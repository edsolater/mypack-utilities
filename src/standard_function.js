/** judger
 *--------------------------------
 * 判断单值是否符合条件
 * (.filter 的回调)
 *
 */
export const isTrusy = Boolean
export const isFalsy = val => !Boolean(val)
export const isTrue = val => val === true
export const isFalse = val => val === false
export const isFilledArray = val => (Array.isArray(val) ? val.length > 0 : false)
export const isNumber = val => typeof val === 'number' || val instanceof Numberc
export const isInt = val => isNumber(val) && val === parseInt(val)
export const isOdd = val => isInt(val) && isInt(val % 2 === 1)
export const isEven = val => isInt(val) && isInt(val % 2 === 0)

/**
 * @order 2
 */
// export const is = shouldValue => val => val === shouldValue // TOFIX: 如此写不够灵活
export const is = (...args) => {
    const callbacks = args.map(val => {
        if (typeof val === 'string') {
            switch (val.toLowerCase()) {
                case 'true': {
                    return isTrue
                }
                case 'trusy': {
                    return isTrusy
                }
                case 'false': {
                    return isFalse
                }
                default: {
                    throw Error(`haven't define a judger role for this value: ${val}`)
                }
            }
        } else if (typeof val === 'function') {
            return val
        } else {
            throw Error(
                `can't recognize value type other than string or function, value is: ${val}`
            )
        }
    })
    return pipe(callbacks)
}
/**
 * TODO 我觉得可以再灵活点，overload它
 * 检查数据类型
 * @example
 * typeIs(Array, [1]); // true
 * typeIs(ArrayBuffer, new ArrayBuffer()); // true
 * typeIs(Map, new Map()); // true
 * typeIs(RegExp, /./g); // true
 * typeIs(Set, new Set()); // true
 * typeIs(WeakMap, new WeakMap()); // true
 * typeIs(WeakSet, new WeakSet()); // true
 * typeIs(String, ''); // true
 * typeIs(String, new String('')); // true
 * typeIs(Number, 1); // true
 * typeIs(Number, new Number(1)); // true
 * typeIs(Boolean, true); // true
 * typeIs(Boolean, new Boolean(true)); // true
 */
const typeIs = (type, val) => ![, null].includes(val) && val.constructor === type // 抄来的没懂

/** comparer
 * -------------------------------
 * 比较2个值，看是否符合条件
 *
 */
const areEqualRecursively = (x, y) => {
    if (Object.is(x, y)) return true
    if (x instanceof Date && y instanceof Date) return x.getTime() === y.getTime()
    if (!x || !y || (typeof x !== 'object' && typeof y !== 'object')) return x === y
    if (x.prototype !== y.prototype) return false
    let keys = Object.keys(x)
    if (keys.length !== Object.keys(y).length) return false
    return keys.every(k => equals(x[k], y[k]))
} // 没懂

/** mapper
 *--------------------------------
 * 映射单值 (.map 的回调)
 *
 */

/** function tools
 *--------------------------------
 * 返回处理过后的新函数
 *
 */
export const pipe = (...fns) => {
    fns = fns.flat()
    if (fns.length === 0) {
        return any => any //为空时默认返回的函数
    } else if (fns.length === 1) {
        return fns[0] // 只有唯一函数值时默认返回的函数
    } else {
        return fns.reduce((fn1, fn2) => (...args) => fn2(fn1(...args)))
    }
}
/**
 * 反转 judger 的判断条件
 * @example
 * [1, 2, 3, 4, 5, 6].filter(negate(isEven)) // 结果上等同于：[1, 2, 3, 4, 5, 6].filter(isOdd)
 */
const negate = fn => (...args) => !fn(...args)

/**
 * 捕获运行函数的异常
 */
const attempt = fn => {
    try {
        return fn()
    } catch (e) {
        return e instanceof Error ? e : new Error(e)
    }
}

/**
 * 延迟执行
 * @dependAPI setTimeout
 */
const defer = (fn, { delay = 0 } = {}) => setTimeout(fn, delay)

/**
 * 计算函数执行时间
 * @dependAPI console.time
 * @example
 * timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
 */
const timeTaken = (fn, ...args) => {
    console.time('timeTaken')
    const r = fn(...args)
    console.timeEnd('timeTaken')
    return r
}

/**
 * 缓存函数
 */
const memorize = fn => {
    if (fn.cache) return fn // 已经是缓存函数了，就直接返回
    function cachedFn(...args) {
        const cacheKey = JSON.stringify(args)
        const cache = cachedFn.cache
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey)
        } else {
            cache.set(cacheKey, fn(...args))
            return cache.get(cacheKey)
        }
    }
    cachedFn.cache = new Map()
    return cachedFn
}

/**
 * 只 调用一次的函数
 */
const once = fn =>
    function once(...args) {
        if (once.called) {
            return
        } else {
            once.called = true
            return fn(...args)
        }
    }

/**
 * 固定函数的部分参数
 * @todo
 * @example
 * fixParam(add, [3, 1], [4, 2]) = num => add(num, 3, 4)
 */
const fixParam = (fn, ...valueIdx) => {
    return (...args) => {
        valueIdx.sort((x, y) => (x[1] || 1) - y[1])
        valueIdx.forEach(([param, idx]) => {
            args.splice()
        })
    }
} //这个逻辑没写完

const formatParam = (...args) => {
    args = args.flat()
}

/**
 * 解绑(含有this的method)
 * @param {Function} objectMethod
 * @example
 * const slice = disassembly(Array.prototype.slice)// [3,4,5]
 */
const unbind = objectMethod => (target, ...params) => objectMethod.call(target, ...params)
