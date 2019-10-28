type UtilLevel = number
type TargetNumber = number
type UtilInputType = string[]
type UtilOutputType = string[]
type UtilCode = {}
type Target = any
type ConfigObj = Object

interface Util {
  (...params: any[]): UtilOutputType
  utilName: string
  utilLevel: number //utilLevel值不变，生产环境下用不着
  targetNumber: number //targetNumber值会变，生产环境下会使用
  isUnary: Boolean
  isBinary: Boolean
  isTrinary: Boolean
  isInfinary: Boolean
  targetInputType: string[]
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

interface UtilCreator {
  (config: { utilName: string; plugin?: ('memorize' | 'once')[] }): Util
}

declare const utilCreator: UtilCreator
