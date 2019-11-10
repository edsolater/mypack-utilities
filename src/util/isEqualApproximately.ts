/**
 * 约等于
 * @example
 * isEqualApproximately(Math.PI / 2.0, 1.5708); // true
 */
export const isEqualApproximately = (
  x: number,
  y: number,
  config: {
    /**
     * 指定精确到小数点后位数
     */
    preciseTo?: number
    /**
     * 可允许的误差范围
     */
    errorRange?: number
  } = {}
) => {
  const { preciseTo, errorRange } = config
  if (errorRange) {
    return Math.abs(x - y) < errorRange
  } else if (preciseTo) {
    return x.toFixed(preciseTo) === y.toFixed(preciseTo)
  } else {
    return Math.abs(x - y) < Number.EPSILON
  }
}
