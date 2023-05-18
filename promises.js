const promiseFunc = () => {
    console.log('Not a Promise');
    new Promise((resolve, reject) => {
        let success = true
        if (success) {
            resolve('This is a Promise')
        } else {
            reject('This is an Error')
        }
        
    }).then(resolve => console.log(resolve))
    .catch(error => console.log(error))

    console.log('Still not a Promise')
}

const promise2Func = () => {
    console.log('Not a Promise2');
    new Promise((res, rej) => {
        let success = true
        if (success) {
            res('This is a Promise2')
        } else {
            rej('This is an Error2')
        }
        
    }).then(resolve => console.log(resolve))
    .catch(error => console.log(error))

    console.log('Still not a Promise2')
}


const asyncFunction = async () => {
    try {
        console.log('Not an Async');
        let success = true
        if (success) {
            await console.log('This is an async success')
        } else {
            throw 'This is an async error'
        }
        
        console.log('Still Not an Async');
    } catch (error) {
        console.log(error)
    }
}

promiseFunc()
asyncFunction()
promise2Func()