import { allTheSame } from './allTheSame'
import { isEqualApproximately } from './isEqualApproximately'
import { fixConfig } from './fixConfig'

test(`数组[1,1,1,1,1]内的值都精确相等`, () => {
  expect(allTheSame([1, 1, 1, 1])).toBe(true)
  expect(allTheSame([2, undefined, 1, 1])).toBe(false)
  expect(allTheSame([1, 1, 1, 2])).toBe(false)
})
test(`附加功能：数组[0.3, 0.1 + 0.2, 0.4 - 0.1]内的值都粗略相等`, () => {
  expect(allTheSame([0.3, 0.1 + 0.2, 0.4 - 0.1], { comparator: isEqualApproximately })).toBe(true)
})
test(`附加功能2：数组[1, 1.2, 1.3, 1.4, 1.5]内的值都粗略相等`, () => {
  expect(
    allTheSame([1, 1.2, 1.3, 1.4, 1.5], {
      comparator: fixConfig(isEqualApproximately, 2, { errorRange: 1 })
    })
  ).toBe(true)
})
