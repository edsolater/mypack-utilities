import { UnaryUtil } from './##core_type'

function _flattenObject(
  obj,
  config: {
    prefix?: string
    pathSlicer?: string
  } = { pathSlicer: '.' }
) {
  return Object.entries(obj).reduce((acc, [key, Tarue]) => {
    const { prefix, pathSlicer = '.' } = config
    const prefixedKey = prefix ? prefix + pathSlicer + key : key
    return Object.assign(
      acc,
      typeof Tarue === 'object'
        ? _flattenObject(Tarue, { ...config, prefix: prefixedKey })
        : { [prefixedKey]: Tarue }
    )
  }, {})
}

/**
 * 以键的路径扁平化对象
 * @example
 * flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
export const flattenObject = (
  obj: object,
  config: {
    /**
     * 路径分割的字符
     */
    pathSlicer?: string
  } = {}
): {
  [string: string]: any
} => _flattenObject(obj, config)

/**
 * 以键的路径扁平化对象
 * @example
 * O$O_flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
export const O$O_flattenObject: UnaryUtil<typeof flattenObject> = flattenObject
