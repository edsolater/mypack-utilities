/**
 * 随机地获取一个值
 * @example
 * randomlyPluck([3, 7, 9, 11]); // 9
 */
export const randomlyPluck = (
  arr: any[],
) => arr[Math.floor(Math.random() * arr.length)]

