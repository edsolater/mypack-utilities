import { getObjectValueWithPath } from './getObjectValueWithPath'

/**
 * 按指定路径，比较两对象的相同位置的props的值
 * @example
 * fixParam(add, [3, 1], [4, 2]) = num => add(num, 3, 4)
 */
export const sorterWithPropPath = (
  object1: object,
  object2: object,
  {
    propPath
  }: {
    /**
     * 提取的路径
     */
    propPath: string
  }
) => getObjectValueWithPath(object1, propPath) - getObjectValueWithPath(object2, propPath)
