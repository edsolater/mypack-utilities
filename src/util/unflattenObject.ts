/**
 * 以键的路径展开对象
 * @example
 * unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
 */
export const unflattenObject = <T>(
  obj:  {[key: string]: T},
  config: {
    /**
     * 用作路径分割符号的字符，默认采用： "."
     */
    pathSlicer?: string
  } = {}
): object => _unflattenObject(obj, config)

function _unflattenObject(obj: any, config: { pathSlicer?: string; restKey?: string } = {}) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const { pathSlicer = '.', restKey: oldRestKeys } = config
    const [firstKey, ...restKey] = oldRestKeys || key.split(pathSlicer)
    return Object.assign(
      acc,
      key.includes(pathSlicer)
        ? {
            [firstKey]: _unflattenObject(
              { [restKey.join(pathSlicer)]: value },
              { ...config, restKey: restKey.join('') }
            )
          }
        : { [key]: value }
    )
  }, {})
}
