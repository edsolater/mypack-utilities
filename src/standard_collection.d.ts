import { UnaryUtil, Judger } from './_utilCreator'
import { Val } from './_util_type_bucket'

/**
 * 布尔全等判断
 * @example
 * all([4, 2, 3], {judger: x => x > 1}); // true
 * all([1, 2, 3]); // true
 */
export declare const all: UnaryUtil<
  (
    arr: any[],
    config?: {
      /**
       * 用于对每个值做出判断
       */
      judger?: Judger
    }
  ) => boolean
>

/**
 * 检查数组各项相等
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
export declare const allEqual: UnaryUtil<(arr: any[]) => boolean>

/**
 * 去除固定位置的值
 * @example
 * remove(['beep', 'boop', 'foo', 'bar'], {indexes:[1,2,0]}) // ['bar']
 * remove({a:'hello',b:'world', c:'haha'}, {propNames:['a','b']}) // {c:'haha'}
 */
export declare const remove: UnaryUtil<{
  (arr: Val[], config?: { indexes?: number[] }): Val[] //虽然overload了，但这里没有用generic是没有灵魂的
  (obj: Object, config?: { propNames?: string[] }): Object //虽然overload了，但这里没有用generic是没有灵魂的
}>

/**
 * 按条件(judger)数组中的某些值
 * @example
 * compact(['hello', 0, 1, true], { dropItems: [0] }) // ['hello', 1, true]
 */
export declare const compact: UnaryUtil<
  (
    arr: Val[],
    config?: {
      /**
       * 需要去除的元素（其实是个创建临时judger的快捷方式）
       */
      dropItems?: Val[]
      /**
       * 去除元素的条件
       */
      judger?: Judger
    }
  ) => Val[]
>

/**
 * 这只是一个应用
 * 检测数值出现次数
 * @example
 * count([1, 2, 3, 123, 12, 2, 1, 45, 5, 3], { targetValues: [45] }); // 1
 */
export declare const count: UnaryUtil<(arr: Val[]) => number>

/**
 * // 不推荐使用，用 Array.prototype.flat(Infinity) 以提升效率
 * 递归式地扁平化数组
 * - mutate 会深改变原数组
 *
 * @targetCount 1
 * @inputType Array
 * @outputType Array
 * @example
 * flatten([1, [2], [[3], 4], 6, 'hello']) // [ 1, 2, 3, 4, 6, "hello" ]
 * flatten([1, [2], [[[[[3]]]], undefined, [[[4]]]], 6, 'hello'], { depth: 2 }) //[ 1, 2, [ [ [ 3 ] ] ], undefined, [ [ 4 ] ], 6, "hello" ]
 * flatten([1, [2], [[[[3]]], [undefined], [[4]]], 6, 'hello'], { ignoreUndefined: true }) // [ 1, 2, 3, 4, 6, "hello" ]
 *
 */
export declare const flatten: UnaryUtil<
  (
    arr: Val[],
    config?: {
      /**
       * 指定拍平数组的深度，一旦设定就不再是递归式地拍平数组了
       */
      depth?: number
      /**
       * 出现在输出中的条件
       */
      judger?: Judger
      /**
       * 运算会改变原数组，默认的方法是 immutable 的
       */
      mutable?: boolean
    }
  ) => Val[]
>

/**
 *
 * 寻找并返回数组中某值的索引（默认搜索整个数组）
 * @example
 * find([1, 2, 3, 1, 2, 3], {targetValue: 1}); // [0,3]
 */
export declare const find: UnaryUtil<
  (
    arr: Val[],
    config?: {
      /**
       * 是否搜索整个数组（一般不用设置，默认为true）
       */
      findAll?: boolean
      /**
       * 是否找到一个后立刻返回
       */
      findOne?: boolean
      /**
       * 查找的目标（其实是targetValues的一个快捷方式）
       */
      targetValue?: Val
      /**
       * 查找的目标们
       */
      targetValues?: Val[]
    }
  ) => Number[] // 这样作为工具函数才是有灵魂的
>

/**
 * “洗牌”数组
 * @mutate
 * @example
 * shuffle([2,3,4,5,6]) // [3,5,2,6,4]
 */
export declare const shuffle: UnaryUtil<
  (
    arr: Val[],
    config: {
      /**
       * 运算会改变原数组，默认的方法是 immutable 的
       */
      mutable: boolean
    }
  ) => Val[]
>

/**
 * 随机地获取一个值
 * @example
 * pickRandomly([3, 7, 9, 11]); // 9
 */
export declare const pickRandomly: UnaryUtil<{
  <T extends number, U extends Val>(arr: U[], config?: { pickNumber?: T }): T extends 1
    ? Val
    : Val[] //TODO: 不够 Generic 待研究
  (obj: Object, config?: { propNames?: string[] }): Object
}>

/**
 * **迟早要作为一个 overload 并入 flatten 方法的实现中。并将flattenObject作为一个函数的预定义形式**
 * 以键的路径扁平化对象
 * @example
 * flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
 */
export declare const flattenObject: UnaryUtil<
  (
    obj: Object,
    config?: {
      /**
       * 用作路径分割符号的字符，默认为： "."
       */
      pathSlicer?: string
    }
  ) => Object
>

/**
 * TODO: 暂时没看懂
 * 以键的路径展开对象
 * @example
 * unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
 */
export declare const unflattenObject: UnaryUtil<
  (
    obj: Object,
    config?: {
      /**
       * 用作路径分割符号的字符，默认采用： "."
       */
      pathSlicer?: string
    }
  ) => Object
>

/**
 * 取出propValues
 * （待实现）与remove方法的目的相反
 * @example
 * pluck({ foo: 'hello', a: '1', b: '2' }, { propNames: ['a', 'b'] })//['1', '2']
 */
export declare const pluck: UnaryUtil<
  <O, K extends keyof O>(obj: O, config: { propNames: K[]; [configName: string]: any }) => O[K][] // 这样作为工具函数才是有灵魂的
>
