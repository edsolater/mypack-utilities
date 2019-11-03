import { utilCreator } from './_utilCreator.js'



export const runPromisesInSeries = utilCreator({
  utilName: 'runPromisesInSeries',
  utilType: 'infinaryUtil',
  utilCode: {
    'Promise[]': promises =>
      promises.reduce((promise, next) => promise.then(next), Promise.resolve())
  }
})
