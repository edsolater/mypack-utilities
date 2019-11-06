import { Judger } from './#package_type'

/**
 * 按条件从数据的集合中细分信息
 * @example
 * arryCalssify([3, 5, 8], { labelPattern: { a: (tar) => tar > 6, b: (tar) => tar < 4 } }) // {a: [8], b: [3]}
 */
export const arryCalssify = <O extends { [lavel: string]: Judger }, T>(
  arr: T[],
  config: {
    labelPattern?: O
  } = {}
): { [label in keyof O]?: T[] } => {
  if (!config.labelPattern) return {}
  return arr.reduce((acc, tar) => {
    Object.entries(config.labelPattern).forEach(([label, judger]) => {
      if (judger(tar)) {
        if (Array.isArray(acc[label])) {
          acc[label].push(tar)
        } else {
          acc[label] = [tar]
        }
      }
    })
    return acc
  }, {})
}

/**
 * 按条件从数据的集合中细分信息
 * @example
 * arryCalssify([3, 5, 8], { labelPattern: { a: (tar) => tar > 6, b: (tar) => tar < 4 } }) // {a: [8], b: [3]}
 */
export const T0$Oval_arrayClassify = arryCalssify

