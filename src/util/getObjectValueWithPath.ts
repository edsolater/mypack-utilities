/**
 * 按路径获取对象的值
 */
export const getObjectValueWithPath = (obj, path = '') => _get(obj, path.split('.'))
function _get(obj, pathArray = []) {
  if (obj === undefined) {
    return undefined
  } else if (pathArray.length === 1) {
    return obj[pathArray[0]]
  } else {
    return _get(obj[pathArray.shift()], pathArray)
  }
}
