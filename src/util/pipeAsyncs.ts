import { AsyncFunction } from './#package_type'

/**
 * 拼接async函数
 */
const pipeAsyncs = (...asyncs: AsyncFunction[]) => (asyncInput) =>
  asyncs.reduce((chain, func) => chain.then(func), Promise.resolve(asyncInput))