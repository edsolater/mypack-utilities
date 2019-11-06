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
 * NN$B_mathEqual(Math.PI / 2.0, 1.5708); // true
 */
export const NN$B_mathEqual = mathEqual
