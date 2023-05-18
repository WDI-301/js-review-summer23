let first, second, third;
[first, second, third] = ['Who', 'What', "I don't know"]

console.log('!@-------first, second, third-------@!')
console.log(first, second, third)

const arrMaker = (minNum=0, maxNum=20, iterator=1) => {
    let newArr = new Array
    for (let index = minNum; index <= maxNum; index += iterator) {
        newArr.push(index)
    }
    return newArr
}
let myArr = arrMaker(1,5,1)

let alpha, beta, charlie, delta, foxtrot;
[alpha, beta, charlie, delta, foxtrot] = myArr;
console.log(alpha, beta, charlie, delta, foxtrot);

[alpha, beta, charlie, delta, foxtrot] = myArr.map( element => {
    return {
        number: "Integer",
        value: element
    }
})

console.log(foxtrot)
// alpha = alpha.value
console.log(alpha.value, beta.value, charlie.value, delta.value, foxtrot.value);
let newObjArray = [alpha, beta, charlie, delta, foxtrot]
console.log(newObjArray);
let newObj = {
    name: 'alpha',
    ...alpha  // number: 'Integer', value: 1
}
console.log('!@-------newObj-------@!')
console.log(newObj)

const nameArrayFunc = () => {
    let nameArray = ['alpha', 'beta', 'charlie', 'delta', 'foxtrot']
    return [alpha, beta, charlie, delta, foxtrot] = newObjArray.map( (element, index) => {
        return {
            name: nameArray[index],
            ...element
        }
    })

}
console.log('!@-------Name Arry-------@!')
console.log(nameArrayFunc())


//------------API example-------------

let username = {
    userID: 1,
    firstname: 'Violet',
    lastname: 'Dwyer'
}

let post = {
    userID: 1,
    postID: 1,
    title: "I'm baby hexagon XOXO",
    post: "90's irony cloud bread keffiyeh four dollar toast marfa vinyl vaporware distillery pok pok forage. Gentrify yuccie fanny pack, vinyl dreamcatcher proident meditation whatever deserunt solarpunk. Actually tempor brunch, subway tile praxis normcore hot chicken irure tbh art party post-ironic officia vice raw denim. Sustainable direct trade bodega boys helvetica, vape occaecat shoreditch edison bulb adaptogen marfa schlitz banh mi. Tempor next level chicharrones ut sriracha. Sed marxism semiotics, salvia art party chillwave 90's eiusmod sus venmo hexagon."
}

const combineAPI = (username, post) => {
    return {
        ...post,
        ...username
    }
}

console.log('!@-------combineAPI-------@!')
console.log(combineAPI(username, post))  //notice userID stays the same, you can only one of a key name

const makePost = (username, post) => {
    return {
        title: post.title,
        author: username.firstname,
        post: post.post
    }
}
console.log('!@-------makePost-------@!')
console.log(makePost(username, post))


//  ---------------- Object.keys && Object.values ------------------

let pets = [
                'Mr. Bigglesworth','Cat',3,
                'Raphael','Turtle',15,
                'Dug','Dog',5,
                'Nymeria','Direwolf',7,
                'Toothless','Dragon',21  
            ]
let things = [
                'Herbie','VW Bug',50,
                'Hubble','Telescope',30,
                'GPS','Satellite',45,
                'Titan','Moon',4000000000,
                'Empire State Building','Skyscraper',70
            ]
let movies = [  
                'Everything, Everywhere, All at Once', 'The Daniels', 2022, 10,
                'Dune', 'Denis Villeneuve', 2021, 8,
                'Blade Runner 2049', 'Denis Villeneuve', 2019, 9
            ]

// Make a function that create objects out of the Array
// turns:
//  'Mr. Bigglesworth','Cat',3
// into:
// {
//     name: 'Mr. Bigglesworth',
//     type: 'Cat',
//     age: 3
// }

const objMaker = (name, type, age) => {
    let newObj = new Object
    newObj = {
        name: name,
        type: type,
        age, age
    }
    return newObj
}
const movieMaker = (name, type, age, rating) => {
    return {
        title: name,
        director: type,
        release: age,
        rating: rating
    }
}
// function is for breaking up the array into defined lengths as the element
// to pass into the above objMaker function
const breakerFunc = (arr, indexLength, callbackFunc ) => {
    let returnArr = new Array
    //loop for
    // 1) breaking up the arr into lenghts of indexLength (ex 3)
    // 2) creating a new object with the callback
    for (let index = 0; index < arr.length; index = index + indexLength) {
        returnArr.push(callbackFunc(...arr.slice(index, index+indexLength)))
    }
    return returnArr
}

console.log(breakerFunc(pets, 3, objMaker));
console.log(breakerFunc(movies, 4, movieMaker));

//----CSV-----

let petsCSV = [
    'Name','Species', 'Age', null, 
    'Mr. Bigglesworth','Cat',3,
    'Raphael','Turtle',15,
    'Dug','Dog',5,
    'Nymeria','Direwolf',7,
    'Toothless','Dragon',21  
]
let thingsCSV = [
    'Name','Type', 'Age', null, 
    'Herbie','VW Bug',50,
    'Hubble','Telescope',30,
    'GPS','Satellite',45,
    'Titan','Moon',4000000000,
    'Empire State Building','Skyscraper',70
]
let moviesCSV = [ 
    'Title', 'Director', 'Year',  'Rating', null, 
    'Everything, Everywhere, All at Once', 'The Daniels', 2022, 10,
    'Dune', 'Denis Villeneuve', 2021, 8,
    'Blade Runner 2049', 'Denis Villeneuve', 2019, 9
]

const objectMaker = (keyNames, values) => {
    // keyNames = ['Name','Species', 'Age']
    // values = ['Mr. Bigglesworth','Cat',3]
    
    let returnObj = new Object
    // for loop version -----
    // for (let index = 0; index < keyNames.length; index++) {
    //     returnObj = {
    //         ...returnObj,
    //         [keyNames[index]]: values[index]
    //     }
    // }
    //
    // forEach version -----
    keyNames.forEach( (element, index) => {
        returnObj = {
            ...returnObj,
            [element]: values[index]
        }
    })

    return returnObj
}

const breakerArrayFunc = ( arr, callback ) => {
    // find kthe index of null
    let indexLength = arr.indexOf(null)

    // Array for returning
    let returnArr = new Array

    //-----Version 1 -----
    // Array of keyNames
    // let keyNames = arr.slice(0 , indexLength)

    // // Array of values
    // let valuesArr = arr.slice(indexLength + 1)

    // // loop through valuesArr and send to my callback
    // // sends: 
    // // 1) keyNames
    // // 2) section of array where the length is equal to indexLength

    // for (let index = 0; index < valuesArr.length; index += indexLength) {
    //     returnArr.push(callback(keyNames, valuesArr.slice(index, index + indexLength)))
    // }

    // -----Version 2------
    // same result with a single for loop


    return returnArr
}

console.log('!@-------PetsCSV-------@!')
console.log(breakerArrayFunc(petsCSV, objectMaker))

console.log('!@-------thingsCSV-------@!')
console.log(breakerArrayFunc(thingsCSV, objectMaker))


console.log('!@-------moviesCSV-------@!')
console.log(breakerArrayFunc(moviesCSV, objectMaker))


