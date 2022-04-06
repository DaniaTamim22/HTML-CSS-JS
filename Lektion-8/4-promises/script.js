
const doSomthing = (value) => {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve('success data')

        }
        else {
            reject('error message')
        }

    })
}

doSomthing(true)
    .then(data => console.log(data))
    .catch(err => console.log(err))


const getRequest = (endpoint, cb) => {
    const http = new XMLHttpRequest();

    http.addEventListener('readystatechange', () => {
        if (http.status === 200 && http.readyState === 4) {
            // console.log(http.responseText)
            const data = JSON.parse(http.responseText)
            cb(undefined, data)
        }
        else if (http.readyState === 4) {
            cb('could not get the data', undefined)
        }
    })



    http.open('GET', endpoint)
    http.send();
}
