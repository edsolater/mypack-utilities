import { shuffle } from './shuffle'

const arr = [1, 5, 2, 0, 3, 9, 7, 11, 25, 32]
test(`shuffle ${JSON.stringify(arr)}`, () => {
  expect(shuffle(arr)).not.toContainEqual(arr)
})
