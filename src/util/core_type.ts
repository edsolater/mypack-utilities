import { ConfigObj } from '../_utilCreator'

export interface Mapper {
  (...any: any[]): any
}
/**
 * 零元Util 专用于凭空创造出一个对象来，本身只接收配置对象
 */
export type ZeroUtil<T extends (config?: ConfigObj) => any> = T
/**
 * 一元Util
 */
export type UnaryUtil<T extends (tar1: any, config?: ConfigObj) => any> = T
/**
 * 二元Util
 */
export type BinaryUtil<T extends (tar1: any, tar2: any, config?: ConfigObj) => any> = T
/**
 * 三元Util
 */
export type TrinaryUtil<T extends (tar1: any, tar2: any, tar3: any, config?: ConfigObj) => any> = T
/**
 * 无限元Util
 * 比较特殊
 */
export type InfinaryUtil<T extends (arr: any[], config?: ConfigObj) => any> = T


export const emptyMapper = val => val
