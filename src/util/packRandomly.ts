/**
 * 随机地获取一个值
 * @example
 * pickRandomly([3, 7, 9, 11]); // 9
 */
export const pickRandomly = (
  arr: any[],
) => arr[Math.floor(Math.random() * arr.length)]

