const getData = async (url) => {
    try {
        const res = await fetch(url)
        // console.log(res)

        if (res.status !== 200) {
            throw new Error('can\'t fetch the data')
        }

        const data = await res.json()
        console.log(data)

        return data
    }
    catch (err) {
        console.log(err)
    }
}


// const user = getData('user.json')
//     .then(data => console.log(data))
//     .catch(err => console.log(err  ))






const output = document.querySelector('#output')


let todos = []


const getTodos = async () => {
    const res = await fetch('todos.json')
    todos = await res.json()

    todos.forEach(todo => {

        //     const div = document.createElement('div')
        //     div.innerText = todo.title
        //     output.appendChild(div)
        // })

        output.insertAdjacentHTML('beforeend', `<p id="todo${todo.id}">${todo.title}</p>`)
        document.querySelector('#todo' + todo.id).addEventListener('click', function () {
            todos = todos.filter(_todo => _todo.id !== todo.id)
            this.remove()
        })
    })

}
getTodos()