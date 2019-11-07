import { Function } from './#package_type'

/**
 * 拼接同步函数
 */
export const pipe = (...fns: Function[]) => (...args) => fns.reduce((fn1, fn2) => fn2(fn1(...args)))
