//基础函数
const type = val => {
  if (typeof val === 'object') {
    return Object.prototype.toString.call(val).slice(8, -1)
  } else {
    return typeof val
  }
}
const assertType = (val, typeString) => type(val) === typeString

//#region 额外的功能模块
/**
 * 缓存功能
 */
const plugin_memorize = util => {
  if (util.cache) return util // 已经是缓存函数了，因此直接返回即可
  const cachedFn = (...args) => {
    const cacheKey = JSON.stringify(args)
    const cache = cachedFn.cache
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    } else {
      cache.set(cacheKey, util(...args))
      return cache.get(cacheKey)
    }
  }
  cachedFn.cache = new Map()
  return cachedFn
}
const pluginList = {
  memorize: plugin_memorize
}
//#endregion
const setConfig = (util, preConfig = {}) =>
  Object.assign((tar, config = {}) => util(tar, { ...config, ...preConfig }), util, {
    isTemporaryUtil: true,
    hasConfig: true,
    configs: Array.isArray(util.configs) ? util.configs.concat(preConfig) : [preConfig]
  })

const addTarget = (util, ...preTargets) => {
  if (util.targetNumber === 0) return util
  const effectiveTargets = preTargets.slice(0, util.targetNumber)
  const restTargetNumber = util.targetNumber - effectiveTargets.length
  return Object.assign(
    (...params) => {
      const configObj = params[restTargetNumber]
      const restTargets = params.slice(0, restTargetNumber)
      return util(
        ...(configObj
          ? effectiveTargets.concat(restTargets, configObj)
          : effectiveTargets.concat(restTargets))
      )
    },
    util,
    {
      isTemporaryUtil: true,
      hasTarget: true,
      targetNumber: restTargetNumber,
      targets: Array.isArray(util.targets)
        ? util.targets.concat(effectiveTargets)
        : effectiveTargets
    }
  )
}
export const utilCreator = config => {
  const { utilCode, plugin /* 这其实是个快捷方式 */, plugins = [plugin], isInfinaryUtil } = config
  const anUtil = Object.values(utilCode)[0] // 随便找一个Util函数的某个类型的定义，反正传参数量都应该是一致的。
  const shouldTargetNumber = anUtil.length //定义 Util 时不存在(...tars)=> 这种自由度过大的写法，但infinaryUtil在使用时可传任意数量的参数
  const infinaryUtil = (...params) => {
    const configObj = params.length === 2 && assertType(params[1], 'Object') && params.pop()
    const targets = params.length === 1 && Array.isArray(params[0]) ? params[0] : params
    const utilFunction = utilCode[type(targets[0]) + '[]'] || utilCode['any[]']
    return utilFunction(targets, configObj || undefined)
  }
  const normalUtil = (...params) => {
    const configObj = params[shouldTargetNumber]
    const targets = params.slice(0, shouldTargetNumber)
    const utilFunction = utilCode[targets.map(type).join(',')] || utilCode['any']
    return utilFunction(targets, configObj || undefined)
  }
  const util = Object.assign(isInfinaryUtil ? infinaryUtil : normalUtil, {
    // 直接由设定得到
    utilName: config.utilName || 'unknown',
    utilDepth: config.utilDepth || 1,
    isJudger: config.isJudger || false,
    isInfinaryUtil: config.isInfinaryUtil || false,
    canMutate: config.canMutate || false,
    plugin,
    plugins,
    isHighOrderFunction: config.isHighOrderFunction || false, //特殊标记

    // 由计算得到
    targetNumber: shouldTargetNumber, //targetNumber值会变，生产环境下会使用
    targetInputType: Object.keys(utilCode),
    creator: utilCreator,
    addTarget(...targets) {
      return addTarget(this, ...targets)
    },
    setConfig(configObj) {
      return setConfig(this, configObj)
    },
    exec() {
      return this()
    },
    async execAsync() {
      return await this()
    } //可能并不需要async模块
  })
  return plugins
    .filter(Boolean)
    .reduce((acc, pluginName) => (pluginList[pluginName] ? pluginList[pluginName](acc) : acc), util)
}

/******************* 以下为使用示例 *******************/
const unaryExample = utilCreator({
  utilName: 'decompose',
  utilCode: {
    'string': (x, config = {}) => [...x],
    'Array': (x, config = {}) => [3]
  }
})

// console.log(unaryExample.addTarget('hello').addTarget(4)()) //第二个addTarget是无效的
// console.log(unaryExample.addTarget('hello'))
const binaryExample = utilCreator({
  utilName: 'addTwo',
  utilCode: {
    'number,number': (x, y, config = {}) => x + y
  }
})

// console.log(binaryExample.addTarget(4).addTarget(5)()) //第二个addTarget是无效的
// console.log(binaryExample)
const trinaryExample = utilCreator({
  utilName: 'addThree',
  utilCode: {
    'number,number,number': (x, y, z, config = {}) => x + y + z
  }
})

// console.log(
//   trinaryExample
//     .addTarget(2)
//     .addTarget(4)
//     .addTarget(4)
//     .exec()
// )
// console.log(trinaryExample.utilDepth)
// const infinaryExample = utilCreator({
//   utilName: 'sum',
//   plugins: ['memorize'],
//   utilCode: {
//     'number[]': (...nums) => nums.reduce((acc, x) => acc + x, 0)
//   }
// })

// console.log(infinaryExample.addTarget(3).addTarget(3)(4, 5))
// console.log(infinaryExample.addTarget(3).addTarget(3)())
// console.log(infinaryExample.utilDepth)
