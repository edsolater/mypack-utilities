import { Val } from './_util_type_bucket'
import { UnaryUtil, BinnaryUtil } from './_utilCreator'

export declare const isFalsy: UnaryUtil<(tar: Val) => boolean> //TODO: 这里要引用Util的定义，现在是不全面的
export declare const getType: UnaryUtil<
  (tar: Val) => 'boolean' | 'number' | 'string' | 'Array' | 'Object' | string
>
export declare const isDefined: (tar: Val) => boolean

export declare const assertType: BinnaryUtil<(tar: Val, typeString: string) => boolean>
