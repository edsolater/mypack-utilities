interface IOverload {
  (param: number): number[]
  (param: object): object[]
  oha: 'hello'
}

const overloadedArrowFunc: IOverload = (param: any) => {
  return [param, param]
}
overloadedArrowFunc.oha = 'hello'



const val = overloadedArrowFunc(4)
console.log(overloadedArrowFunc.oha)

