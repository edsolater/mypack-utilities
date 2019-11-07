/**
 * 检查数组各项相等
 * @example
 * allTheSame([1, 2, 3, 4, 5, 6]); // false
 * allTheSame([1, 1, 1, 1]); // true
 */
export const allTheSame = <T>(arr: T[]) => arr.every((Tar) => Tar === arr[0])