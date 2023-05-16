// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
//     element +=1
//     return element
// }
// const newArr = new Array
// const newArr = []

const arrMaker = (minNum=0, maxNum=20, iterator=1) => {
    let newArr = new Array
    for (let index = minNum; index <= maxNum; index += iterator) {
        newArr.push(index)
    }
    return newArr
}

// console.log(arrMaker());
// console.log(arrMaker(0,50,5));
let myArr = arrMaker(1,5,1)

// -------------------------------------------
//          Map
// -------------------------------------------
// https://www.w3schools.com/jsref/jsref_map.asp
//
// return a new array that has some argument applied to every element of the array
// const myMapArr = myArr.map((element, index, array) => element +1)
// const myMapArr = myArr.map((e, i, a) => element +1)
// const myMapArr = myArr.map(element => element +1)
// const myMapArr = myArr.map(e => e +1)
// name does not matter, its a parameter
// const myMapArr = myArr.map(unicorn => unicorn +1)

// single line function imply a return
// if you are using {} you must have a return

// const myMapArr = myArr.map(element => {
//    return element +1
// })
//----For Each
// https://www.w3schools.com/jsref/jsref_foreach.asp
//
// forEach iterates through the array like map, but runs it directly instead returning the new values
// let accumulator = 0
// const eachArr = myArr.forEach(element => accumulator += element + 1);

// console.log(myArr);
// console.log(eachArr);
// console.log(accumulator);
// console.log(myMapArr);