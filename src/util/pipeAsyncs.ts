import { AsyncFunction } from './#package_type'

/**
 * 顺序拼接（async函数），以形成一个新函数
 * @example
 *  const foo = pipeAsyncs(
 *   async (yello:number)=>3,
 *   async (hello:number)=>'hello'
 * )
 */
export const pipeAsyncs: {
  <Input, Return>(f1: (arg1: Input) => Promise<Return>): (asyncInput: Input) => Promise<Return>
  <Input, T1, Return>(f1: (arg1: Input) => Promise<T1>, f2: (arg2: T1) => Promise<Return>): (
    asyncInput: Input
  ) => Promise<Return>
  <Input, T1, T2, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
  <Input, T1, T2, T3, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<T3>,
    f4: (arg4: T3) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
  <Input, T1, T2, T3, T4, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<T3>,
    f4: (arg4: T3) => Promise<T4>,
    f5: (arg5: T4) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
  <Input, T1, T2, T3, T4, T5, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<T3>,
    f4: (arg4: T3) => Promise<T4>,
    f5: (arg5: T4) => Promise<T5>,
    f6: (arg6: T5) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
  <Input, T1, T2, T3, T4, T5, T6, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<T3>,
    f4: (arg4: T3) => Promise<T4>,
    f5: (arg5: T4) => Promise<T5>,
    f6: (arg6: T5) => Promise<T6>,
    f7: (arg7: T6) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
  <Input, T1, T2, T3, T4, T5, T6, T7, Return>(
    f1: (arg1: Input) => Promise<T1>,
    f2: (arg2: T1) => Promise<T2>,
    f3: (arg3: T2) => Promise<T3>,
    f4: (arg4: T3) => Promise<T4>,
    f5: (arg5: T4) => Promise<T5>,
    f6: (arg6: T5) => Promise<T6>,
    f7: (arg7: T6) => Promise<T7>,
    f8: (arg8: T7) => Promise<Return>
  ): (asyncInput: Input) => Promise<Return>
} = (...asyncs: AsyncFunction[]) => (asyncInput) =>
  asyncs.reduce((chain, func) => chain.then(func), Promise.resolve(asyncInput))
