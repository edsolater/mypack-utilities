export const puck = (obj, getProperty) => {
  if (typeof getProperty === 'function') {
    return getProperty(object)
  } else {
    return object[getProperty]
  }
}
