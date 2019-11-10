export function isEqualDeep(value1, value2) {
  if (typeof value1 === typeof value2){
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return Object.keys(value1).every(key=>isEqualDeep(value1[key], value2[key]))
    } else {
      return Object.is(value1, value2)
    }
  } else {
    return false
  }
}