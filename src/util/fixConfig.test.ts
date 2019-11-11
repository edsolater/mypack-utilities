import { fixConfig } from './fixConfig'
import { isEqualApproximately } from './isEqualApproximately'

test(`试试`, () => {
  expect(fixConfig(isEqualApproximately, 2, {})(0.1 + 0.2, 0.3)).toEqual(true)
})