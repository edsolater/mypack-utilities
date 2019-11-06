import { Judger } from './#package_type'

/**
 * 布尔全等判断
 * @example
 * all([4, 2, 3], {judger: x => x > 1}); // true
 * all([1, 2, 3]); // true
 */
export const all = (
  arr: any[],
  config: {
    judger?: Judger
  } = {}
) => {
  const { judger } = config
  return arr.every(judger)
}

/**
 * 布尔全等判断
 * @example
 * T0$B_all([4, 2, 3], {judger: x => x > 1}); // true
 * T0$B_all([1, 2, 3]); // true
 */
export const T0$B_all = all
