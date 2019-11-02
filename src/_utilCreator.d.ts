type TargetNumber = number
type UtilInputType = string[]
type UtilOutputType = string[]
type UtilCode = {}
type Target = any
type ConfigObj = { [setting: string]: any }

interface UtilJudger extends Util {
  (...any: any[]): boolean
}
type PureJudger = (...any: any[]) => boolean
type Judger = UtilJudger | PureJudger
type avaliableUtilType = 'unaryUtil' | 'binaryUtil' | 'trinaryUtil' | 'infinaryUtil' | 'judger'
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
   * 是否会改变 “元” 自身内容（默认返回一个新值）
   */
  readonly canMutate: boolean
  /**
   * 此Util的种类（必须指定）
   */
  readonly utilType: string
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
   * 标记工具函数是否是有特殊行为的InfinaryUtil
   */
  readonly isInfinaryUtil: boolean
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
     * 此Util的种类（必须指定）
     */
    utilType: avaliableUtilType | avaliableUtilType[]
    /**
     * 是否会改变 “元” 自身内容（默认返回一个新值，即immutable）
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
      'any'?: UtilFunction
      'boolean[]'?: UtilFunction
      'number[]'?: UtilFunction
      'string[]'?: UtilFunction
      'Array[]'?: UtilFunction
      'Object[]'?: UtilFunction
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

type UnaryUtil<T extends (...any: any) => any> = Util & T
type BinaryUtil<T extends (...any: any) => any> = Util & T
/**
 * 比较特殊，
 * 可以是一元函数，第一参数必须有[]包裹，可以接受配置对象
 * 可以是无限参数，无需使用[]包裹，但不能接受配置对象
 */
type MapInfinaryUtil<T> = T extends ((
  tars: Array<infer Tar>,
  config?: infer Config
) => infer Output)
  ? (...tars: Tar[]) => Output
  : never

type InfinaryUtil<T> = Util & T & MapInfinaryUtil<T>

// type InfinaryUtil<T> = T extends ((tars: infer Tars, config?: infer Config) => infer Output)
//   ? Tars extends Array<infer Tar> ? (tars: Tar[], config?: Config) => Output
//   : (...tars: )
//   : 3
