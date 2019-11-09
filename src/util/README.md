前缀说明: INPUT\$OUTPUT_utilName
（同时输出有 INPUT\$OUTPUT\_ 与没有 INPUT\$OUTPUT\_ 的版本（用于在后开发中删除 INPUT\$OUTPUT\_），以便兼顾开发速度与后开发的可读性）

Utilities 列表
class 种类：

- **zeroUtil** 单纯传入 config，用于生成一个值
- **unaryUtil** 一元工具函数
- **binaryUtil** 二元工具函数
- **infinaryUtil** 无限元工具函数
- **highOrderUtil** 高阶工具函数——需要传入 callback 函数的工具函数
- **functionUtil** 函数包裹器——用于创造新函数的函数
- **judger** 返回布尔值的函数，通常用于鉴定

| utilName                                | class             | input                               | output        | 备注(特性)                       |
| --------------------------------------- | ----------------- | ----------------------------------- | ------------- | -------------------------------- |
| [createRandom](./createRandom.ts)       | zeroUtil          |                                     | number        |                                  |
| [range](./range.ts)                     | zeroUtil          |                                     | number[]      |                                  |
| [all](./all.ts)                         | unaryUtil judger  | Tar[]                               | boolean       |                                  |
| [drop](./drop.ts)                       | unaryUtil         | Tar[]                               | Tar[]         |                                  |
| [count](./count.ts)                     | unaryUtil         | Tar[]                               | number        |                                  |
| [shuffle](./shuffle.ts)                 | unaryUtil         | Tar[]                               | Tar[]         |                                  |
| [randomlyPluck](./randomlyPluck.ts)     | unaryUtil         | Tar[]                               | number        |                                  |
| [arrayClassify](./arrayClassify.ts)     | unaryUtil         | Tar[]                               | object        |                                  |
| [findIndexAll](./findIndexAll.ts)       | unaryUtil         | Tar[]                               | number[]      |                                  |
| [findAll](./findAll.ts)                 | unaryUtil         | Tar[]                               | Tar[]         |                                  |
| [allTheSame](./allTheSame.ts)           | unaryUtil judger  | Tar[]                               | boolean       |                                  |
| [average](./average.ts)                 | unaryUtil         | number[]                            | number        |                                  |
| [toCase](./toCase.ts)                   | unaryUtil         | string                              | string        |                                  |
| [unflattenObject](./unflattenObject.ts) | unaryUtil         | object                              | object        |                                  |
| [flattenObject](./flattenObject.ts)     | unaryUtil         | object                              | object        |                                  |
| [numberEqual](./numberEqual.ts)         | binaryUtil judger | number, number                      | boolean       |                                  |
| [difference](./difference.ts)           | binaryUtil        | Tar[], Tar[]                        | Tar[]         |                                  |
| [intersection](./intersection.ts)       | binaryUtil        | Tar[], Tar[]                        | Tar[]         |                                  |
| [union](./union.ts)                     | binaryUtil        | Tar[], Tar[]                        | Tar[]         |                                  |
| [forEachEntries](./forEachEntries.ts)   | binaryUtil        | object, ([key, value], index)=>void | void          | 简写，（不推荐使用。缺少灵活性） |
| [map](./map.ts)                         | highOrderUtil     | Tar[], (Tar,index)=>any             | Tar[]         |                                  |
| [beforeEach](./beforeEach.ts)(alias)    | sementicAlias     |                                     |               |                                  |
| [afterEach](./afterEach.ts)(alias)      | sementicAlias     |                                     |               |                                  |
| [pipeAsyncs](./pipeAsyncs.ts)           | functionUtil      | ...AsyncFunction                    | AsyncFunction |                                  |
| [pipe](./pipe.ts)                       | functionUtil      | ...Function                         | Function      |                                  |
