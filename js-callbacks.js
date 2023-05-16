// ----------------------------
//   ---- Callbacks ----
// ---------------------------
// a function that is passed as an argument to another function.
// https://www.w3schools.com/js/js_callback.asp

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






