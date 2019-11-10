import { isEqualApproximately } from './isEqualApproximately'

test(`精确到小数点后3位`, () => {
  expect(isEqualApproximately(3.2, 3.2004, { preciseTo: 3 })).toBe(true)
  expect(isEqualApproximately(3.2, 3.204, { preciseTo: 3 })).toBe(false)
})
test(`有指定误差范围`, () => {
  expect(isEqualApproximately(3.2, 4.0, { errorRange: 1 })).toBe(true)
  expect(isEqualApproximately(3.2, 8.0, { errorRange: 2 })).toBe(false)
})
test(`在JavaScript的数字精度下相等`, () => {
  expect(isEqualApproximately(0.1 + 0.2, 0.3)).toBe(true)
})
