前缀说明: UtilType_OUTPUT_utilName
同时输出有 UtilType_OUTPUT 与没有 UtilType_OUTPUT 的版本（用于在后开发中删除 UtilType_OUTPUT），以便兼顾开发速度与后开发的可读性

- `Z_N_random`: 名称 random，类型 zeroUtil，输出 number
- `Z_N0_range`: 名称 range, 类型 zeroUtil, 输出 number[]
- `U_N_average`: 名称 average，类型 unaryUtil, 输入 number[]输出 number
- `B_B_mathEqual`: 名称 mathEqual, 类型 binaryUtil, 输入 number,number 输出 boolean
- `U_B_all`: 名称 all, 类型 unaryUtil, 输入 any[], 输出 boolean
