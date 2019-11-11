import { Util } from './#package_type'

export const fixConfig = <U extends Util>(
  util: U,
  utilLevel: number,
  config?: Parameters<U>[typeof utilLevel] // 这里不能直接写number类型
) => (...args: Parameters<U>) => {
  args[utilLevel] = { ...(args[utilLevel] || {}), ...config }
  return util(...args)
}