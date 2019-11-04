import { all, remove } from './standard_collection.js'
import { isFalsy } from './util_unknown.js'
import { un_Average } from './standard_number.js'
import { toCase } from './standard_string.js'

all([1, 2], { judger: isFalsy })
remove({ a: 'hello' }, { propNames: ['a'] })
console.log(un_Average([3,4]))
console.log(([3,4],{by}))
console.log('result: ', toCase('helloWorld   Tdsdf-incorrect', { formatType: 'kebab-case' }))
