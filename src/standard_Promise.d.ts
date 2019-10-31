import { LastType } from './_type_utils'

/**
 * 按顺序运行多个Promise
 */
export const runPromisesInSeries: (
  promises: Promise<any>[]
) => LastType<typeof promises>