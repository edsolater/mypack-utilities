import { utilCreator } from './_utilCreator.js'

/**
 * 各种写法的互转：PascalCase\camelCase\
 * @example
 * toCase('fooBar', {formatType: 'PascalCase'}); // 'FooBar'
 * toCase('FooBar', {formatType: 'camelCase'}); // 'fooBar'
 * toCase('fooBar', {formatType: 'white space'}); // 'foo Bar'
 * toCase('fooBar', {formatType: 'kebab-case'}); // 'foo-bar'
 * toCase('fooBar', {formatType: 'snack_case'}); // 'foo_bar'
 */

export const toCase = utilCreator({
  utilName: 'toCase',
  utilType: 'unaryUtil',
  utilCode: {
    'string': (str, { formatType = 'camelCase' } = {}) => {
      console.log(str)
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
  }
})
const splitSentence = (str = '') => {
  console.log(str)
  return str.match(/[a-z]+(?=[ _-])|[a-z]+$|^[a-z]+|[A-Z][a-z]+/g)
}
const capitalize = ([firstLetter = '', ...restLeters]) =>
  [firstLetter.toUpperCase(), ...restLeters].join('')

console.log('h  e   llo'.split(' '))

