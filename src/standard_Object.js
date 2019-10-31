/**
 * 提取对象的值（们）
 * _ordered 后缀，代表方法的的参数在意义上顺序是固定的
 * _basic 后缀，代表此方法的最底层实现（完全不考虑任何参数的多态性）
 *
 * @example 已通过这些测试用例
 * pick({a:'hello', b:2}, 'b') // 2
 * pick('b')({a:'hello', b:2}) // 2
 * pick({a:'hello', b:2})('b') // 2
 * pick({a:'hello', b:2}, 'a', 'b') // ['hello', 2]
 */
export const pick = (...args) => {
  if (args.length === 1 && typeof args[0] === 'object') {
    return (...properties) => _pick_ordered(obj, ...properties)
  } else if (typeof args[0] === 'string') {
    return obj => _pick_ordered(obj, ...args)
  } else if (args.length >= 2) {
    return _pick_ordered(...args)
  }
}
const _pick_ordered = (obj, ...properties) => {
  if (properties.length === 1) {
    return _pick_basic(obj, properties[0])
  } else {
    return properties.map(property => _pick_basic(obj, property))
  }
}
const _pick_basic = (obj, property) => obj[property]

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

const obj = { a: 'hello', b: 'wor' }

export const pluck = (obj, { propNames = [] }) => propNames.map(propName => obj[propName])
