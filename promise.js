/**
 * 运行多个Promise
 */
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());