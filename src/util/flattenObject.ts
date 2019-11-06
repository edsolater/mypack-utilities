//远不够generic
/**
 * 以键的路径扁平化对象
 * @example
 * flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
export const flattenObject = <T>(
  obj: { [key: string]: T },
  config: {
    /**
     * 路径分割的字符
     */
    pathSlicer?: string
  } = {}
): {
  [string: string]: T
} => _flattenObject(obj, config)

function _flattenObject(
  obj: any,
  config: {
    prefix?: string
    pathSlicer?: string
  } = { pathSlicer: '.' }
) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const { prefix, pathSlicer = '.' } = config
    const prefixedKey = prefix ? prefix + pathSlicer + key : key
    return Object.assign(
      acc,
      typeof val === 'object' && !Array.isArray(val)
        ? _flattenObject(val, { ...config, prefix: prefixedKey })
        : { [prefixedKey]: val }
    )
  }, {})
}

const a = flattenObject({ a: { b: { c: 1 } }, d: 1 })
