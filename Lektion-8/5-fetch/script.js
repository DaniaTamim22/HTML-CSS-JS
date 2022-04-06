// fetch('user.json')
//     .then(response => {
//         console.log(response)
//         console.log(response.json())
//     })


fetch('user.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return fetch('todos.json')
    })
    .then(res => res.json())
    .then(data => console.log(data))

