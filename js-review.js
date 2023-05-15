// const helloWorld = () => {
//     console.log('hello world')
// }
// helloWorld()

// const callBack = (param, param2) => {
//     return param + ' ' + param2
// }

// console.log('!@-------callback-------@!')
// console.log(callBack('Hello', 'World!'))

const callBack3 = (param, param2, param3='World') => {
    return `${param} ${param2} ${param3}`
}

console.log('!@-------callback-------@!')
console.log(callBack3('Hello', 'Your'))
console.log('!@-------callback3-------@!')
console.log(callBack3('Hello', 'Your', 'World!!!!'))


