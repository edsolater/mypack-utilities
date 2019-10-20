const puck = (obj, getProperty) => {
  if (typeof getProperty === 'function') {
    return getProperty(object)
  } else {
    return object[getProperty]
  }
}

/**
 * TODO: 暂时没看懂
 * 以键的路径扁平化对象
 * @example
 * flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + '.' : ''
    if (typeof obj[key] === 'object')
      Object.assign(acc, flattenObject(obj[key], pre + key))
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
            keys
              .map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`))
              .join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      )
    } else acc[k] = obj[k]
    return acc
  }, {})
