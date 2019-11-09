/**
 * 检查数组各项相等
 * @example
 * allTheSame([1, 2, 3, 4, 5, 6]); // false
 * allTheSame([1, 1, 1, 1]); // true
 */
export const allTheSame = <T>(tars: T[]) => tars.every((Tar) => Tar === tars[0])

