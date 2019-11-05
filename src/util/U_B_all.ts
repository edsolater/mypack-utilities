import { Judger, UnaryUtil } from './_core_type'

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
 * I_B_all([4, 2, 3], {judger: x => x > 1}); // true
 * I_B_all([1, 2, 3]); // true
 */
export const I_B_all: UnaryUtil<typeof all> = all
