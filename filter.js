// -------------------------------------------
//         Filter
// -------------------------------------------
// https://www.w3schools.com/jsref/jsref_filter.asp

// filter iterates through an array, sends the element to the new array
// only if it passes the conditional statement

// make a function the creates an array of the specified parameters
const arrMaker = (minNum=0, maxNum=20, iterator=1) => {
    let newArr = new Array
    for (let index = minNum; index <= maxNum; index += iterator) {
        newArr.push(index)
    }
    return newArr
}
let myArr = arrMaker(1,10,1)

// manual version
// let newArr = []
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     if (element % 2 !== 0) {
//         // if true push element to new array
//         newArr.push(element)
//     }
// }
// console.log(myArr);
// console.log(newArr);


// filter iterates through an array like map and sends the element to the new array
// ONLY if it passes the conditional statement
// in other words
// if the statement is true (returns true) return element to the new array
// if the statement is false do nothing
// if there neither true or false do nothing
const filteredArr = myArr.filter(element => element % 2 !== 0)

const filteredArrReturn = myArr.filter(element => {
    return element % 2 === 0
})

// const filteredArrParams = myArr.filter((element, index, array) => element === array[index])
const filteredArrParams = myArr.filter((element, index, array) => {
    let sum = array[index-1] +1
    return element === sum
})

const filteredArrMultiple = myArr.filter((element, index, array) => {
   if (element % 2 === 0) {
    return true
   }
   if (element % 2 !== 0 && element === 5) {
    return true
   }
})

// make an arr that return values that are divisible by 5 or 3
// element % 3 === 0

// two versions
// multiple if statements

// single line



console.log(myArr);
console.log(filteredArr);
console.log(filteredArrReturn);
console.log(filteredArrParams);
console.log(filteredArrMultiple);