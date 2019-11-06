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


| complexUtilName        | utilName        | class      | input         | output   |
| ---------------------- | --------------- | ---------- | ------------- | -------- |
| \_\$N_random           | random          | zeroUtil   |               | number   |
| \_\$N0_range           | range           | zeroUtil   |               | number[] |
| N0\$N_average          | average         | unaryUtil  | number[]      | number   |
| NN\$B_mathEqual        | mathEqual       | binaryUtil | number,number | boolean  |
| S\$S_toCase            | toCase          | unaryUtil  | string        | string   |
| T0\$B_all              | all             | unaryUtil  | Tar[]         | boolean  |
| T0\$B_allTheSame       | allTheSame      | unaryUtil  | Tar[]         | boolean  |
| T0\$T0_compact         | compact         | unaryUtil  | Tar[]         | Tar[]    |
| T0\$N_count            | count           | unaryUtil  | Tar[]         | number   |
| T0\$T0_shuffle         | shuffle         | unaryUtil  | Tar[]         | Tar[]    |
| T0\$T_pickRandomly     | pickRandomly    | unaryUtil  | Tar[]         | number   |
| O\$O_flattenObject     | flattenObject   | unaryUtil  | object        | object   |
| O\$O_unflattenObject   | unflattenObject | unaryUtil  | object        | object   |
| T0\$Oval_arrayClassify | arrayClassify   | unaryUtil  | Tar[]         | object   |
| T0\$N0_findIndexAll    | findIndexAll    | unaryUtil  | Tar[]         | number[] |
| T0\$T0_findAll         | findAll         | unaryUtil  | Tar[]         | Tar[]    |
