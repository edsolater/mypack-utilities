/* *************

这是一个新的想法

**************/

const type = val => {
  if (typeof val === 'object') {
    return Object.prototype.toString.call(val).slice(8, -1)
  } else {
    return typeof val
  }
}
const addTarget_unary = (util, tar) =>
  Object.assign((config = {}) => util(tar), util, {
    isTemporaryUtil: true,
    hasTarget: true,
    targetNumber: 0,
    targets: [tar]
  })
const setConfig_unary = (util, preConfig) =>
  Object.assign(
    (tar, config = {}) => util(tar, { ...config, ...preConfig }),
    util,
    {
      isTemporaryUtil: true,
      hasConfig: true,
      configs: Array.isArray(util.configs)
        ? util.configs.concat(preConfig)
        : [preConfig]
    }
  )
const utilCreator_unary = ({ utilName = 'unknown', utilCode }) =>
  Object.assign((tar, config = {}) => utilCode[type(tar)](tar, config), {
    utilName,
    utilLevel: 1,
    isUnary: true,
    targetNumber: 1,
    targetInputType: Object.keys(utilCode),
    creator: utilCreator_unary,
    addTarget(tar) {
      return addTarget_unary(this, tar)
    },
    setConfig(config) {
      return setConfig_unary(this, config)
    }
  })

// 使用示例
const decompose = utilCreator_unary({
  utilName: 'decompose',
  utilCode: {
    'string': (tar1, config = {}) => [...tar1],
    'Array': (tar1, config = {}) => [3]
  }
})

const foo = (tar1, { hello = true } = {}) => [...tar1]
console.log(decompose.addTarget('hello').utilName)
