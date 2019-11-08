import { Function, FirstType, LastType } from './#package_type';

/**
 * 拼接同步函数
 */
export const pipe = <T extends Function[]>(
    ...fns: T
): ((...firstFunctionParameters: Parameters<FirstType<T>>) => ReturnType<LastType<T>>) => (...args) =>
    fns.reduce((fn1, fn2) => fn2(fn1(...args))) as any;

const foo = pipe(
    (hello: boolean) => 3,
    (hello: number) => hello + 'world'
);
