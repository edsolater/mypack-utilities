前缀说明: INPUT\$OUTPUT_utilName
（同时输出有 INPUT\$OUTPUT\_ 与没有 INPUT\$OUTPUT\_ 的版本（用于在后开发中删除 INPUT\$OUTPUT\_），以便兼顾开发速度与后开发的可读性）

Utilities 列表
class 种类：

- **zeroUtil** 单纯传入 config，用于生成一个值
- **unaryUtil** 一元工具函数
- **binaryUtil** 二元工具函数
- **infinaryUtil** 无限元工具函数
- **highOrderUtil** 高阶工具函数 —— 需要传入 callback 函数的工具函数
- **functionUtil** 函数包裹器(函数工厂) —— 用于创造新函数的函数
- **judger** 判断子 —— 返回布尔值的函数，通常用于鉴定

| utilName                                              | class             | target\<Tar extends any\> | output         | 说明                                                         |
| ----------------------------------------------------- | ----------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| [createRandom](./createRandom.ts)                     | zeroUtil          |                           | number         |                                                              |
| [range](./range.ts)                                   | zeroUtil          |                           | number[]       |                                                              |
| [all](./all.ts)                                       | unaryUtil judger  | Tar[]                     | boolean        |                                                              |
| [drop](./drop.ts)                                     | unaryUtil         | Tar[]                     | Tar[]          |                                                              |
| [count](./count.ts)                                   | unaryUtil         | Tar[]                     | number         |                                                              |
| [shuffle](./shuffle.ts)                               | unaryUtil         | Tar[]                     | Tar[]          |                                                              |
| [randomlyPluck](./randomlyPluck.ts)                   | unaryUtil         | Tar[]                     | number         |                                                              |
| [arrayClassify](./arrayClassify.ts)                   | unaryUtil         | Tar[]                     | object         |                                                              |
| [findIndexAll](./findIndexAll.ts)                     | unaryUtil         | Tar[]                     | number[]       |                                                              |
| [findAll](./findAll.ts)                               | unaryUtil         | Tar[]                     | Tar[]          |                                                              |
| [allTheSame](./allTheSame.ts)                         | unaryUtil judger  | Tar[]                     | boolean        | 判断一整个数组的元素是否完全相同                             |
| [average](./average.ts)                               | unaryUtil         | number[]                  | number         |                                                              |
| [toCase](./toCase.ts)                                 | unaryUtil         | string                    | string         |                                                              |
| [unflattenObject](./unflattenObject.ts)               | unaryUtil         | object                    | object         |                                                              |
| [flattenObject](./flattenObject.ts)                   | unaryUtil         | object                    | object         |                                                              |
| [getObjectValueWithPath](./getObjectValueWithPath.ts) | unaryUtil         | object                    | unknown        | 获取对象的属性值（按路径）                                   |
| [repeat](./repeat.ts)                                 | unaryUtil         | Tar                       | Tar[]          | 重复元素                                                     |
| [isEqual](./isEqual.ts)                               | binaryUtil judger | Tar, Tar                  | boolean        | 判断两个值是否精确相等（使用 Object.is）                     |
| [isEqualDeep](./isEqualDeep.ts)                       | binaryUtil judger | Tar, Tar                  | boolean        | 递归地判断值是否相等                                         |
| [isEqualApproximately](./isEqualApproximately.ts)     | binaryUtil judger | number, number            | boolean        | 判断两个数字是否在误差范围内相等                             |
| [sorterWithPropPath](./sorterWithPropPath.ts)         | binaryUtil sorter | object, object            | number         | 专用于生成 Array.prototype.sort 的 sorter                    |
| [difference](./difference.ts)                         | binaryUtil        | Tar[], Tar[]              | Tar[]          |                                                              |
| [intersection](./intersection.ts)                     | binaryUtil        | Tar[], Tar[]              | Tar[]          |                                                              |
| [union](./union.ts)                                   | binaryUtil        | Tar[], Tar[]              | Tar[]          |                                                              |
| [map](./map.ts)                                       | highOrderUtil     | Tar[], (Tar,index)=>any   | Tar[]          |                                                              |
| [beforeEach](./beforeEach.ts)(alias)                  | sementicAlias     |                           |                |                                                              |
| [afterEach](./afterEach.ts)(alias)                    | sementicAlias     |                           |                |                                                              |
| [convertMethodToUtil](./convertMethodToUtil.ts)       | functionUtil      | method                    | Function       | 将 method 转为 Util，并在使用时多出来了个 target（操作目标） |
| [convertUtilToMethod](./convertUtilToMethod.ts)       | functionUtil      | util                      | Function       | 将 Util 转为 method，转换时需要手动传入个 target（操作目标） |
| [pipeAsyncs](./pipeAsyncs.ts)                         | functionUtil      | ...AsyncFunction          | AsyncFunction  |                                                              |
| [pipe](./pipe.ts)                                     | functionUtil      | ...Function               | Function       |                                                              |
| [negate](./negate.ts)                                 | functionUtil      | ...judger                 | negatedJudger  | 反转 judger                                                  |
| [memorize](./memorize.ts)                             | functionUtil      | util                      | cashedFunction | 附加缓存                                                     |
| [once](./once.ts)                                     | functionUtil      | util                      | onceFunction   | 新函数只能调用一次                                           |
| [fixParam](./fixParam.ts)                             | functionUtil      | util                      | newFunction    | 返回固定参数的新函数                                         |
| [fixConfig](./fixConfig.ts)                           | functionUtil      | util                      | newFunction    | 返回已固定配置的新 Util                                      |
