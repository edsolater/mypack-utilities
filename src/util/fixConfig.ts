import { Util } from './#package_type'
import { isEqualApproximately } from './isEqualApproximately'

export const fixConfig = <U extends Util>(
  util: U,
  utilLevel: number,
  configuration: Parameters<U>[typeof utilLevel]
) => (...args: Parameters<U>) => {
  args[utilLevel] = configuration
  return util(...args)
}
const a = fixConfig(isEqualApproximately, 2, { errorRange: 3 })
TODO