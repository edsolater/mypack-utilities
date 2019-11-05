import { UnaryUtil } from './_core_type'
import { Val } from 'src/_util_type_bucket'

/**
 * 检查数组各项相等
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
export const allEqual = (arr: Val[]) => arr.every(val => val === arr[0])

/**
 * 取平均值
 * @example
 * U_N_allEqual([1, 2, 3, 4, 5, 6]); // false
 * U_N_allEqual([1, 1, 1, 1]); // true
 */
export const U_N_allEqual: UnaryUtil<typeof allEqual> = allEqual
