type TargetNumber = number
type UtilInputType = string[]
type UtilOutputType = string[]
type UtilCode = {}
type Target = any
type ConfigObj = { [setting: string]: any }

interface UtilJudger extends Util {
  (...any: any[]): boolean
}
type PureJudger = (...any: any[])=>boolean
type Judger = UtilJudger | PureJudger


interface Util {
  /**
   * 还需传入的 “元” 的数量
   */
  targetNumber: number //targetNumber值会变，生产环境下会使用
  /**
   * Util的名称
   */
  readonly utilName: string
  /**
   * 共需传入的 “元” 的数量
   */
  readonly utilDapth: number
  /**
   * 是否会改变 “元” 自身内容（默认返回一个新值）
   */
  readonly canMutate: boolean
  /**
   * Util所使用的plugin（是plugins的快捷方式的存在）
   */
  readonly plugin: 'memorize' | 'once'
  /**
   * Util所使用的plugins
   */
  readonly plugins: ('memorize' | 'once')[]
  /**
   * 标记工具函数是否是个judger
   */
  readonly isJudger: boolean
  /**
   * 记录“元”的类型
   */
  readonly targetInputType: string[]
  /**
   * 添加 “元”，返回新临时Util
   */
  addTarget(...targets: Target[]): TargetedUtil
  /**
   * 软绑定一个配置对象（还可以加新的）
   */
  setConfig(configObj: ConfigObj): ConfigedUtil
  /**
   * 以method，运行Util
   */
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
type UtilCreator =
  //要能智能推断是unary还是binary还是什么
  (config: {
    /**
     * Util的名称
     */
    utilName: string
    /**
     * 共需传入的 “元” 的数量
     */
    utilDapth?: number
    /**
     * 是否会改变 “元” 自身内容（默认返回一个新值）
     */
    canMutate?: boolean
    /**
     * Util所使用的plugin（是plugins的快捷方式的存在）
     */
    plugin?: 'memorize' | 'once'
    /**
     * Util所使用的plugins
     */
    plugins?: ('memorize' | 'once')[]
    /**
     * 标记工具函数是否是个judger
     */
    isJudger?: boolean
    /**
     * 核心代码
     */
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
  }) => Util

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

type UnaryUtil<T = (...any: any[]) => any> = Util & T
