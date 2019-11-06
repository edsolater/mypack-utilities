/**
 * 约等于
 * @example
 * numberEqual(Math.PI / 2.0, 1.5708); // true
 */
export const numberEqual = (x: number, y: number) => {
  return Math.abs(x - y) < Number.EPSILON
}

