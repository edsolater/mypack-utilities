/**
 * 按路径获取对象的值
 */
export const getObjectValueWithPath = (obj, { path = '' } = {}) => _get(obj, path.trim().split('.'))
function _get(obj, pathArray = []) {
  if (obj === undefined) return undefined
  if (pathArray.length === 1) {
    if (pathArray[0] === '') {
      return obj
    } else {
      return obj[pathArray[0]]
    }
  } else {
    return _get(obj[pathArray.shift()], pathArray)
  }
}
