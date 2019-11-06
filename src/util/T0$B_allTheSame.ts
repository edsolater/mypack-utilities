/**
 * 检查数组各项相等
 * @example
 * allTheSame([1, 2, 3, 4, 5, 6]); // false
 * allTheSame([1, 1, 1, 1]); // true
 */
export const allTheSame = (arr: any[]) => arr.every((Tar) => Tar === arr[0])

/**
 * 取平均值
 * @example
 * T0$B_allTheSame([1, 2, 3, 4, 5, 6]); // false
 * T0$B_allTheSame([1, 1, 1, 1]); // true
 */
export const T0$B_allTheSame = allTheSame
