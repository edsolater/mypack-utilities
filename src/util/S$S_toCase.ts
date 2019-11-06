/**
 * 各种写法的互转，可转换成：PascalCase \ camelCase \ white space \ kebab-case \ snack_case
 * @example
 * toCase('fooBar', {formatType: 'PascalCase'}); // 'FooBar'
 * toCase('FooBar', {formatType: 'camelCase'}); // 'fooBar'
 * toCase('fooBar', {formatType: 'white space'}); // 'foo Bar'
 * toCase('fooBar', {formatType: 'kebab-case'}); // 'foo-bar'
 * toCase('fooBar', {formatType: 'snack_case'}); // 'foo_bar'
 */
export const toCase = (
  str: string,
  config: {
    /**
     * 返回新字符串的格式
     */
    formatType?: 'camelCase' | 'PascalCase' | 'white space' | 'kebab-case' | 'snack_case'
  } = {}
) => {
  const { formatType = 'camelCase' } = config
  const wordArr = splitSentence(str)
  if (formatType === 'camelCase') {
    return Array.from(wordArr)
      .map((word, idx) => (idx === 0 ? word.toLowerCase() : capitalize(word)))
      .join('')
  } else if (formatType === 'PascalCase') {
    return Array.from(wordArr)
      .map(word => capitalize(word))
      .join('')
  } else if (formatType === 'white space') {
    return Array.from(wordArr)
      .map(word => word.toLowerCase())
      .join('')
  } else if (formatType === 'kebab-case') {
    return Array.from(wordArr)
      .map(word => word.toLowerCase())
      .join('-')
  } else if (formatType === 'snack_case') {
    return Array.from(wordArr)
      .map(word => word.toLowerCase())
      .join('_')
  }
}
const splitSentence = (str = '') => {
  return str.match(/[a-z]+(?=[ _-])|[a-z]+$|^[a-z]+|[A-Z][a-z]+/g)
}
const capitalize = ([firstLetter = '', ...restLeters]: string) =>
  [firstLetter.toUpperCase(), ...restLeters].join('')

/**
 * 各种写法的互转，可转换成：PascalCase \ camelCase \ white space \ kebab-case \ snack_case
 * @example
 * S$S_toCase('fooBar', {formatType: 'PascalCase'}); // 'FooBar'
 * S$S_toCase('FooBar', {formatType: 'camelCase'}); // 'fooBar'
 * S$S_toCase('fooBar', {formatType: 'white space'}); // 'foo Bar'
 * S$S_toCase('fooBar', {formatType: 'kebab-case'}); // 'foo-bar'
 * S$S_toCase('fooBar', {formatType: 'snack_case'}); // 'foo_bar'
 */
export const S$S_toCase = toCase
