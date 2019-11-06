export type Mapper = (...any: any[]) => any
export type Judger = (...any) => boolean
export type Filter = Judger // alias
export type Tar = any
export type Compatator = (x, y) => boolean
