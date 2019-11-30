export const filter = (arg, config: { fns?: Function[] } = {fns:[]}) =>
  config.fns.reduce((acc, fn) => fn(acc), arg) 
