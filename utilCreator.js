//基础函数
const type = val => {
  if (typeof val === 'object') {
    return Object.prototype.toString.call(val).slice(8, -1)
  } else {
    return typeof val
  }
}
/*region 额外的功能模块
还没想好怎么加
可有memorize功能模块、async功能模块（最终运算时是异步的）
endregion */
const setConfig = (util, preConfig = {}) =>
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
const utilCreator = ({
  utilName = 'unknown',
  plugin = [],
  utilCode,
  utilLevel
}) => {
  const anUtil = Object.values(utilCode)[0] // 随便找一个Util函数的某个类型的定义，反正传参数量都应该是一样的。
  const targetNumber = anUtil.length || Infinity
  return Object.assign(
    (...params) => {
      const configObject = params[targetNumber]
      const trueTargets = params.slice(0, targetNumber)
      const codeKey =
        targetNumber === Infinity
          ? type(trueTargets[0] /* 随便选一个 */)
          : trueTargets.map(type).join(',')
      try {
        return utilCode[codeKey](
          ...(configObject ? trueTargets.concat(configObject) : trueTargets)
        )
      } catch {
        throw Error(`utilCode hasn't inputType(${codeKey})`)
      }
    },
    {
      utilName,
      utilLevel: utilLevel || targetNumber, //utilLevel值不变，生产环境下用不着
      targetNumber: utilLevel || targetNumber, //targetNumber值会变，生产环境下会使用
      isUnary: utilLevel === 1 || targetNumber === 1,
      isBinary: utilLevel === 2 || targetNumber === 2,
      isTrinary: utilLevel === 3 || targetNumber === 3,
      isInfinary: utilLevel === Infinity || targetNumber === Infinity,
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
    }
  )
}

/******************* 使用示例 *******************/
const unaryExample = utilCreator({
  utilName: 'decompose',
  utilCode: {
    'string': (x, config = {}) => [...x],
    'Array': (x, config = {}) => [3]
  }
})

// console.log(unaryExample.addTarget('hello').addTarget(4)()) //第二个addTarget是无效的
// console.log(unaryExample.addTarget('hello').utilLevel)
const binaryExample = utilCreator({
  // utilLevel: 2, //不显示地定义也会自动推断的
  utilName: 'addTwo',
  utilCode: {
    'number,number': (x, y, config = {}) => x + y
  }
})

// console.log(binaryExample.addTarget(4).addTarget(5)()) //第二个addTarget是无效的
// console.log(binaryExample.utilLevel)
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
// console.log(trinaryExample.utilLevel)
const infinaryExample = utilCreator({
  // utilLevel: 2, //不显示地定义也会自动推断的
  utilName: 'sum',
  plugin: ['memorize'],
  utilCode: {
    'number': (...nums) => nums.reduce((acc, x) => acc + x, 0)
  }
})

console.log(infinaryExample.addTarget(3).addTarget(3)(4, 5))
console.log(infinaryExample.addTarget(3).addTarget(3)())
console.log(infinaryExample.utilLevel)
