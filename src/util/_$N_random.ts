import { ZeroUtil } from './##core_type'

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
    from?: number
    /**
     * 指定可取到的最大值
     */
    to?: number
    /**
     * 指定数量（生成的数组长度）
     * 指定 to 时 length 无效
     */
    length?: number
    /**
     * 只输出整数
     */
    outputInt?: boolean
  } = {}
) => {
  const { from = 0, length = 10, to = from + length, outputInt = false } = config
  const newRandom = Math.random() * (to - from) + from
  return outputInt ? Math.floor(newRandom) : newRandom
}

/**
 * 生成一个随机值
 * @example
 * _$N_random({max: 20}) // 13.915759733207409
 */
export const _$N_random: ZeroUtil<typeof random> = random
