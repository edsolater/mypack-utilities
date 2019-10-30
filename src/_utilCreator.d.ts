type UtilLevel = number
type TargetNumber = number
type UtilInputType = string[]
type UtilOutputType = string[]
type UtilCode = {}
type Target = any
type ConfigObj = Object

interface Util {
  (...params: any[]): UtilOutputType
  targetNumber: number //targetNumber值会变，生产环境下会使用
  readonly utilName: string
  readonly utilDapth: number //替代utilLevel
  readonly utilLevel: number //utilLevel值不变，生产环境下用不着
  readonly isJudger: boolean
  readonly isUnary: boolean
  readonly isBinary: boolean
  readonly isTrinary: boolean
  readonly isInfinary: boolean
  readonly targetInputType: string[]

  creator: UtilCreator
  addTarget(...targets: Target[]): TargetedUtil
  setConfig(configObj: ConfigObj): ConfigedUtil
  exec(): this
  execAsync(): Promise<UtilOutputType> //可能并不需要async模块
}

interface ConfigedUtil extends Util {
  isTemporary: true
  hasConfig: true
  configs: ConfigObj[]
}
interface TargetedUtil extends Util {
  isTemporary: true
  hasTarget: true
  target: Target[]
}
type UtilFunction = (...any: any[]) => any
interface UtilCreator {
  //要能智能推断是unary还是binary还是什么
  (config: {
    utilName: string
    utilDepth?: number
    isJudger?: boolean
    plugin?: ('memorize' | 'once')[]
    utilCode: {
      'boolean'?: UtilFunction
      'number'?: UtilFunction
      'string'?: UtilFunction
      'Array'?: UtilFunction
      'Object'?: UtilFunction
      'boolean,boolean'?: UtilFunction
      'boolean,number'?: UtilFunction
      'boolean,string'?: UtilFunction
      'boolean,Array'?: UtilFunction
      'boolean,Object'?: UtilFunction
      'number,boolean'?: UtilFunction
      'number,number'?: UtilFunction
      'number,string'?: UtilFunction
      'number,Array'?: UtilFunction
      'number,Object'?: UtilFunction
      'string,boolean'?: UtilFunction
      'string,number'?: UtilFunction
      'string,string'?: UtilFunction
      'string,Array'?: UtilFunction
      'string,Object'?: UtilFunction
      'Array,boolean'?: UtilFunction
      'Array,number'?: UtilFunction
      'Array,string'?: UtilFunction
      'Array,Array'?: UtilFunction
      'Array,Object'?: UtilFunction
      'Object,boolean'?: UtilFunction
      'Object,number'?: UtilFunction
      'Object,string'?: UtilFunction
      'Object,Array'?: UtilFunction
      'Object,Object'?: UtilFunction
      'boolean[]'?: UtilFunction
      'number[]'?: UtilFunction
      'string[]'?: UtilFunction
      'Array[]'?: UtilFunction
      'Object[]'?: UtilFunction
      'any'?: UtilFunction
      'any[]'?: UtilFunction
      [propName: string]: UtilFunction
    }
  }): Util
}

/**
 * 创建工具，用于创建工具函数
 * @example
 * const unaryExample = utilCreator({
 *   utilName: 'decompose',
 *   utilCode: {
 *     'string': (x, config = {}) => [...x],
 *     'Array': (x, config = {}) => [3]
 *   }
 * })
 */
export declare const utilCreator: UtilCreator
