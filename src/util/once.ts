import { Util } from './#package_type'

/**
 * 新函数只能调用一次
 */
export const once = <T extends Util>(fn: T): T | { hasInvoked: boolean } => {
  function oncedFn(...args: Parameters<T>) {
    if (oncedFn.hasInvoked) return undefined
    else {
      oncedFn.hasInvoked = true
      return fn(...args)
    }
  }
  oncedFn.hasInvoked = false
  return oncedFn
}

