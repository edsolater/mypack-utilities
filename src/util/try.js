/**
 * 按条件从数据的集合中细分信息
 */
export const arryCalssify = (arr, config) => {
  if (!config.labelPattern) return arr
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

console.log(arryCalssify([3, 5, 8], { labelPattern: { a: (tar) => tar > 6, b: (tar) => tar < 4 } }))
