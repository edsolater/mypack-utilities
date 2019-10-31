import { all, remove } from './standard_collection'
import { isFalsy } from './util_unknown'

all([1, 2], { judger: isFalsy })
remove({ a: 'hello' }, { propNames: ['a'] })
