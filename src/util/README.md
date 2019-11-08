前缀说明: INPUT\$OUTPUT_utilName
（同时输出有 INPUT\$OUTPUT\_ 与没有 INPUT\$OUTPUT\_ 的版本（用于在后开发中删除 INPUT\$OUTPUT\_），以便兼顾开发速度与后开发的可读性）

Utilities 列表

| utilName                                | class        | input            | output        | 备注(特性)                       |
| --------------------------------------- | ------------ | ---------------- | ------------- | -------------------------------- |
| [createRandom](./createRandom.ts)       | zeroUtil     |                  | number        |                                  |
| [range](./range.ts)                     | zeroUtil     |                  | number[]      |                                  |
| [all](./all.ts)                         | unaryUtil    | Tar[]            | boolean       |                                  |
| [drop](./drop.ts)                       | unaryUtil    | Tar[]            | Tar[]         |                                  |
| [count](./count.ts)                     | unaryUtil    | Tar[]            | number        |                                  |
| [shuffle](./shuffle.ts)                 | unaryUtil    | Tar[]            | Tar[]         |                                  |
| [randomlyPluck](./randomlyPluck.ts)       | unaryUtil    | Tar[]            | number        |                                  |
| [arrayClassify](./arrayClassify.ts)     | unaryUtil    | Tar[]            | object        |                                  |
| [findIndexAll](./findIndexAll.ts)       | unaryUtil    | Tar[]            | number[]      |                                  |
| [findAll](./findAll.ts)                 | unaryUtil    | Tar[]            | Tar[]         |                                  |
| [average](./average.ts)                 | unaryUtil    | number[]         | number        |                                  |
| [toCase](./toCase.ts)                   | unaryUtil    | string           | string        |                                  |
| [unflattenObject](./unflattenObject.ts) | unaryUtil    | object           | object        |                                  |
| [flattenObject](./flattenObject.ts)     | unaryUtil    | object           | object        |                                  |
| [numberEqual](./numberEqual.ts)         | binaryUtil   | number, number   | boolean       |                                  |
| [difference](./difference.ts)           | binaryUtil   | Tar[], Tar[]     | Tar[]         |                                  |
| [intersection](./intersection.ts)       | binaryUtil   | Tar[], Tar[]     | Tar[]         |                                  |
| [union](./union.ts)                     | binaryUtil   | Tar[], Tar[]     | Tar[]         |                                  |
| [forEachEntries](./forEachEntries.ts)   | binaryUtil   | object,callback  | void          | 简写，（不推荐使用。缺少灵活性） |
| [allTheSame](./allTheSame.ts)           | infinaryUtil | ...Tar           | boolean       |                                  |
| [pipeAsyncs](./pipeAsyncs.ts)           | infinaryUtil | ...AsyncFunction | AsyncFunction |                                  |
| [pipe](./pipe.ts)                       | infinaryUtil | ...Function      | Function      |                                  |
