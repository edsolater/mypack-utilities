//TODO: 总觉得要抽象，但又不知该抽象什么
function addTarget(util, preTarget1, preTarget2) {
  if (util.isUtil !== true) throw Error(`${util} is not an util`)
  if (util.level === 1) {
    const newUtil = config => util(preTarget1, config)
    Object.assign(newUtil, util, {
      hasPreTarget: true,
      preTarget: preTarget1,
      preTarget1: preTarget1,
      level: 0
    })
    return newUtil
  }
  if (util.level === 2) {
    if (preTarget1 && !preTarget2) {
      const newUtil = (tar, config) => util(preTarget1, tar, config)
      Object.assign(newUtil, util, {
        hasPreTarget: true,
        preTarget: preTarget1,
        preTarget1: preTarget1,
        level: 1
      })
      return newUtil
    }
    if (preTarget1 && preTarget2) {
      const newUtil = config => util(preTarget1, preTarget2, config)
      Object.assign(newUtil, util, {
        hasPreTarget: true,
        preTarget: [preTarget1, preTarget2],
        preTarget1: preTarget1,
        preTarget2: preTarget2,
        level: 2
      })
    }
  }
  throw Error(`haven't set ${util.level} util's addTarget rule yet`)
}

//TODO: 总觉得要抽象，但又不知该抽象什么
function mergeConfig(util, preConfig) {
  if (util.isUtil !== true) throw Error(`${util} is not an util`)
  if (util.level === 1) {
    const newUtil = (tar, config = {}) => util(tar, { ...preConfig, ...config })
    Object.assign(newUtil, util, { hasPreConfig: true, preConfig: preConfig })
    return newUtil
  }
  if (util.level === 2) {
    const newUtil = (tar1, tar2, config = {}) =>
      util(tar1, tar2, { ...preConfig, ...config })
    Object.assign(newUtil, util, { hasPreConfig: true, preConfig: preConfig })
    return newUtil
  }
  throw Error(`haven't set ${util.level} util's addConfig rule yet`)
}

const dropUndefined = arr => arr.filter(val => val !== undefined)
const type = val => {
  if (typeof val === 'object') {
    return Object.prototype.toString.call(val).slice(8, -1)
  } else {
    return typeof val
  }
}

const addDescription = (util, descriptor) => {
  Object.assign(util, {
    ...descriptor,
    isUtil: true,
    level:
      descriptor.level ||
      (Array.isArray(descriptor.targetType) ? descriptor.targetType.length : 1),
    originalLevel:
      descriptor.originalLevel ||
      (Array.isArray(descriptor.targetType) ? descriptor.targetType.length : 1),
    utilName: descriptor.utilName || util.name
  })
}

function checkLegalParam({
  targets,
  target /* 这就是个快捷方式 */,
  config,
  utility: util
}) {
  /* *************  信息规整（处理快捷方式） **************/

  if (!targets) targets = [target]
  if (!Array.isArray(util.targetType)) util.targetType = [util.targetType]

  /* **************  报错机制  *************** */

  // target(s) 与规定的入参的数量/类型不符
  if (targets.some((target, idx) => type(target) !== util.targetType[idx])) {
    throw Error(
      `utility acceprt ${JSON.stringify(
        util.targetType
      )}, but got ${JSON.stringify(targets)}` //这里打印出来的null其实是undefined
    )
  }

  // 推断出的 config 类型不对
  if (config && typeof config !== 'object') {
    throw Error(`utility's config must be an object, but got ${config}`)
  }
}

function binaryUtilTemplate(tar1, tar2, config) {
  checkLegalParam({
    targets: [tar1, tar2],
    config: config,
    utility: binaryUtilTemplate
  })
  return config
}

addDescription(binaryUtilTemplate, {
  targetType: ['number', 'number'], // TODO：这里并没有考虑overload的情况，是不恰当的
  outputType: 'number' // TODO：这里并没有考虑overload的情况，是不恰当的
})
console.log(addTarget(binaryUtilTemplate, 2)( 2, { world: 'hh' }))

/* 
utility函数的调用的参数一定是运行时完全的且数量固定，不然debug/单元测试困难。
utility应该是死板的，高阶函数负责灵活。
以 unaryUtility 为例
传入一个参数时，1参数：target
传入两个参数时，1参数：target，2参数：config
以 binaryUtility 为例
传入一个参数时，报错
传入两个参数时，1参数：target1，2参数：target2
传入三个参数时，1参数：target1，2参数：target2，3参数：config
*/
