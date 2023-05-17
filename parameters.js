// ------------------------
//       Parameters 
//--------------------------
// https://www.w3schools.com/js/js_function_parameters.asp

// const callBack = (param, param2) => {
//     return param + ' ' + param2
// }

// ---- parameters care about placement order, not name ----

// console.log('!@-------callback-------@!')
// console.log(callBack('Hello', 'World!'))


// ---- parameters can have a default value ----

// const callBack3 = (param0="Hello", param1="Your", param2='World') => {
//     return `${param0} ${param1} ${param2}`
// }

// ---- to skip a parameter, pass "undefined" and it will use the default, if there is one ----
// console.log('!@-------callback-------@!')
// console.log(callBack3('Hello', 'Your'))
// console.log(callBack3('Hello', undefined, 'World!!!!'))
// console.log(callBack3(undefined, undefined, undefined))
// console.log('!@-------callback3-------@!')
// console.log(callBack3('Hello', 'Your', 'World!!!!'))

// ----------------------------
//   ---- Rest Operator ----
// ---------------------------
// looks like the spread operator but in the params
// it with take any amount of passed parameters and put them in an array
//
// const restOperator = (...params) => {
//     return params.join(' ')
// }


// console.log('!@-------2 params-------@!')
// console.log(restOperator("Hello", "World"))
// console.log('!@-------3 params-------@!')
// console.log(restOperator("Hello", "Your", "World"))


