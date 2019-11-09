import { Judger } from './#package_type'

/**
 * 反转 judger
 * @example
 * [1, 2, 3, 4, 5, 6].filter(negate(isEven)) // 结果上等同于：[1, 2, 3, 4, 5, 6].filter(isOdd)
 */
export const negate = <T extends Judger>(judger: T) => (...args: Parameters<T>) =>
  !judger(...args) as ReturnType<T>
