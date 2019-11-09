import { Function } from './#package_type'

/**
 * 给函数缓存功能
 */
export const memorize = <T extends Function>(
  fn: T
): T | { cache: Map<any, any> } => {
  // if (fn.cache) return fn // 已经是缓存函数了，就直接返回
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
