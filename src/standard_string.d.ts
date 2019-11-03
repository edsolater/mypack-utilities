import { UnaryUtil } from './_utilCreator'

/**
 * 各种写法的互转：PascalCase\camelCase\
 * @example
 * toCase('PascalCase', 'fooBar'); // 'FooBar'
 * toCase('camelCase', 'FooBar'); // 'fooBar'
 * toCase('white space', 'fooBar'); // 'foo Bar'
 * toCase('kebab-case', 'fooBar'); // 'foo-bar'
 * toCase('snack_case', 'fooBar'); // 'foo_bar'
 */
//TODO没写还
export declare const toCase: UnaryUtil<
  (
    str: string,
    config?: {
      /**
       * 返回新字符串的格式
       */
      formatType: 'camelCase' | 'PascalCase' | 'white space' | 'kebab-case' | 'snack_case'
    }
  ) => string
>
