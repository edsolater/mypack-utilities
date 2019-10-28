type UtilityConfig = any
interface TargetPayload<T> {
  add(...targets: T[]): void
}
interface UtilityFunction<T> {
  (...args: any[]): any
  targetCount?: number
  targetType1?: string
  targetType2?: string
  target?: TargetPayload<T>
}
interface BinaryUtilityFunction<T> extends UtilityFunction<T> {
  (target1: T, target2: T, config: UtilityConfig)
  targetCount: 2
}




function addTarget<T>(fn: UtilityFunction<T>, ...targets: T[]) {
  fn.target.add(...targets)
  return fn
}

const sum: BinaryUtilityFunction<number> = (a, b) => a + b //TODO 怎么把a的类型传进去
sum.targetCount = 2
sum.targetType1 = 'Array'
sum.targetType2 = 'Array'
