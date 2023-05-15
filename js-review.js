// const helloWorld = () => {
//     console.log('hello world')
// }
// helloWorld()

// const callBack = (param, param2) => {
//     return param + ' ' + param2
// }

// console.log('!@-------callback-------@!')
// console.log(callBack('Hello', 'World!'))

const callBack3 = (param0="Hello", param1="Your", param2='World') => {
    return `${param0} ${param1} ${param2}`
}

console.log('!@-------callback-------@!')
console.log(callBack3('Hello', 'Your'))
console.log(callBack3('Hello', undefined, 'World!!!!'))
console.log(callBack3(undefined, undefined, undefined))
console.log('!@-------callback3-------@!')
console.log(callBack3('Hello', 'Your', 'World!!!!'))

const restOperator = (...params) => {
    return params.join(' ')
}


console.log('!@-------2 params-------@!')
console.log(restOperator("Hello", "World"))
console.log('!@-------3 params-------@!')
console.log(restOperator("Hello", "Your", "World"))



