import { Function } from './#package_type'

export const convertMethodToUtil = <T extends Function>(method: T) => (
  tar: any,
  ...args: Parameters<T>
) => method.apply(tar, args) as ReturnType<T>
