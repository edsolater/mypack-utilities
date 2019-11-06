/**
 * “洗牌”数组
 * @mutate
 * @example
 * shuffle([2,3,4,5,6]) // [3,5,2,6,4]
 */
export const shuffle = <T>(
  arr: T[],
  config: {
    /**
     * 运算会改变原数组，默认的方法是 immutable 的
     */
    mutable?: boolean
  } = {}
) => {
  const { mutable = false } = config
  if (mutable) arr = [...arr]
  let cur = arr.length - 1
  while (cur) {
    const i = Math.floor(Math.random() * cur)
    ;[arr[cur], arr[i]] = [arr[i], arr[cur]]
    cur -= 1
  }
  return arr
}
