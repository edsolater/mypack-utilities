/**
 * 生成一个随机值
 * @example
 * random({max: 20}) // 13.915759733207409
 */
export const random = (
  config: {
    /**
     * 指定可取到的最小值
     * 一般来不用手动设定
     * 默认为0
     */
    min?: number
    /**
     * 指定可取到的最大值
     */
    max?: number
    /**
     * 只输出整数
     */
    outputInt?: boolean
  } = {}
) => {
  const { min = 0, max = min + 10, outputInt = false } = config
  const newRandom = Math.random() * (max - min) + min
  return outputInt ? Math.floor(newRandom) : newRandom
}

/**
 * 生成一个随机值
 * @example
 * _$N_random({max: 20}) // 13.915759733207409
 */
export const _$N_random = random
