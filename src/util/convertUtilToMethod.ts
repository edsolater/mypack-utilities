import { Util, Tail } from './#package_type'

export const convertUtilToMethod = <T extends Util>(util: T, { target }) => (
  ...args: Tail<Parameters<T>>
) => util(target, ...args) as ReturnType<T>
