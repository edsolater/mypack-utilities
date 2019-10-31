import { UnaryUtil, Judger } from './_utilCreator'

/**
 * 布尔全等判断
 * @example
 * all([4, 2, 3], {judger: x => x > 1}); // true
 * all([1, 2, 3]); // true
 */
export declare const all: UnaryUtil<
  (
    arr: any[],
    config?: {
      /**
       * 对每个值做出判断
       */
      judger: Judger
    }
  ) => boolean
>
