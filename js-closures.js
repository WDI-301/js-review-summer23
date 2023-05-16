// ----------------------------
//   ---- Closures ----
// ---------------------------
// how scope works for enclosing functions
// https://www.w3schools.com/js/js_function_closures.asp


console.log('--------------Local Scope--------------------------------')
// variable a is local for each scope
const closureFuncLocal = () => {
    let a = 'initial'
    const innerFunc = () => {
        let a = 'inner'
        console.log('!@-------innerLocal-------@!')
        console.log(a)      
    }
    innerFunc()
    a = 'outer'
    console.log('!@-------outerLocal-------@!')
    console.log(a)
}
closureFuncLocal()

console.log('--------------Params--------------------------------')
// a is not being modified, the value is passed as a param
const paramFunc = () => {
    let a = 'initial'

    const innerFunc = (a) => {
        a = 'inner'
        console.log('!@-------innerLocal-------@!')
        console.log(a)      
    }
    a = 'outer'
    innerFunc(a)
    console.log('!@-------outerLocal-------@!')
    console.log(a)
}
paramFunc()

console.log('-----------------Closure-----------------------------')
// a is being modified by innerFunc with closures
const closureFunc1 = () => {
    let a = 'initial'
    const innerFunc = () => {
        a = 'inner'
        console.log('!@-------innerLocal-------@!')
        console.log(a)      
    }
    a = 'outer'
    innerFunc()
    console.log('!@-------outerLocal-------@!')
    console.log(a)
}
closureFunc1()