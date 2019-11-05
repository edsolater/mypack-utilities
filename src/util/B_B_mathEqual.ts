import { BinaryUtil } from './_core_type'

/**
 * 约等于
 * @example
 * mathEqual(Math.PI / 2.0, 1.5708); // true
 */
export const mathEqual = (x: number, y: number) => {
  return Math.abs(x - y) < Number.EPSILON
}

/**
 * 约等于
 * @example
 * B_B_mathEqual(Math.PI / 2.0, 1.5708); // true
 */
export const B_B_mathEqual: BinaryUtil<typeof mathEqual> = mathEqual
