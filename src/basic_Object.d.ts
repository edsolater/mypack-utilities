import { UtilCreator } from "./_utilCreator.js"

type Pluck<O, K extends keyof O> = {
  (obj: O, config: { propNames: K[]; [configName: string]: any }): O[K][]
}

/**
 * 从对象推出响=相应的value
 */
export declare const pluck: UtilCreator
