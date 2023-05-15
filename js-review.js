// const helloWorld = () => {
//     console.log('hello world')
// }
// helloWorld()

// const callBack = (param, param2) => {
//     return param + ' ' + param2
// }

// console.log('!@-------callback-------@!')
// console.log(callBack('Hello', 'World!'))

// const callBack3 = (param0="Hello", param1="Your", param2='World') => {
//     return `${param0} ${param1} ${param2}`
// }

// console.log('!@-------callback-------@!')
// console.log(callBack3('Hello', 'Your'))
// console.log(callBack3('Hello', undefined, 'World!!!!'))
// console.log(callBack3(undefined, undefined, undefined))
// console.log('!@-------callback3-------@!')
// console.log(callBack3('Hello', 'Your', 'World!!!!'))

// const restOperator = (...params) => {
//     return params.join(' ')
// }


// console.log('!@-------2 params-------@!')
// console.log(restOperator("Hello", "World"))
// console.log('!@-------3 params-------@!')
// console.log(restOperator("Hello", "Your", "World"))
let iterator = 0

function add(param0, param1=1) {
    let total = param0 + param1
    return total
}
const subtract = (param0, param1) => {
    let total = param0 - param1
    return total
}

const multiply = (param0, param1=2) => {
    return param0 * param1
}

// console.log('!@-------add-------@!')
// console.log(add(2,2))
// console.log(add(iterator))
// iterator = add(iterator)
// console.log(iterator)
// iterator = add(iterator)
// console.log(iterator)

// console.log('!@-------subtract-------@!')
// console.log(subtract(4,2))

// console.log('!@-------multiply-------@!')
// console.log(multiply(2,3))

// console.log('!@-------multiply-------@!')
// console.log(multiply(2))

const calculate = (param0, param1, callBackFunc) => {
    let output = callBackFunc(param0,param1)
    console.log('!@-------output-------@!')
    console.log(output)
}

calculate(2,3,multiply)






