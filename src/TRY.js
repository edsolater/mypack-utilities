import { all, remove } from './standard_collection.js'
import { isFalsy } from './util_unknown.js'
import { average } from './standard_number.js'

all([1, 2], { judger: isFalsy })
remove({ a: 'hello' }, { propNames: ['a'] })
average(['hello'])