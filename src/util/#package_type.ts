export type Filter = Judger // alias
export type Mapper = (...any: any[]) => any
export type Judger = (...any: any[]) => boolean
export type Compatator = (x: any, y: any) => boolean
export type AsyncFunction = (...any: any[]) => Promise<any>
export type Function = (...any: any[]) => any
