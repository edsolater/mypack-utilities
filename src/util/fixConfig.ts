import { Util } from './#package_type'

export const fixConfig = <U extends Util>(
  util: U,
  utilLevel: number,
  config?: Parameters<U>[typeof utilLevel]
) => (...args: Parameters<U>) => {
  args[utilLevel] = { ...(args[utilLevel] || {}), ...config }
  return util(...args)
}
TODO