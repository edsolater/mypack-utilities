前缀说明: INPUT\$OUTPUT_utilName
（同时输出有 INPUT\$OUTPUT\_ 与没有 INPUT\$OUTPUT\_ 的版本（用于在后开发中删除 INPUT\$OUTPUT\_），以便兼顾开发速度与后开发的可读性）

Utilities 列表

- B: boolean
- N: number
- S: string
- O: object
- T: Target(目前相当于 any)
- Oval: object 的 value 值
- Okey: object 的 key 值

| utilName        | class      | input         | output   |
| --------------- | ---------- | ------------- | -------- |
| createRandom    | zeroUtil   |               | number   |
| range           | zeroUtil   |               | number[] |
| average         | unaryUtil  | number[]      | number   |
| numberEqual     | binaryUtil | number,number | boolean  |
| toCase          | unaryUtil  | string        | string   |
| all             | unaryUtil  | Tar[]         | boolean  |
| allTheSame      | unaryUtil  | Tar[]         | boolean  |
| drop            | unaryUtil  | Tar[]         | Tar[]    |
| count           | unaryUtil  | Tar[]         | number   |
| shuffle         | unaryUtil  | Tar[]         | Tar[]    |
| pickRandomly    | unaryUtil  | Tar[]         | number   |
| flattenObject   | unaryUtil  | object        | object   |
| unflattenObject | unaryUtil  | object        | object   |
| arrayClassify   | unaryUtil  | Tar[]         | object   |
| findIndexAll    | unaryUtil  | Tar[]         | number[] |
| findAll         | unaryUtil  | Tar[]         | Tar[]    |
