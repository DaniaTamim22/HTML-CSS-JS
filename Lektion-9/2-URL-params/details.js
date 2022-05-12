const id = new URLSearchParams(window.location.search).get('id')
// console.log(id)


// const params = new URLSearchParams(window.location.search)
// const id= params.get('id')
// console.log(id)



// const params = new URLSearchParams()
// params.forEach(param => {
//     console.log(param)
// });


const getPost = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const res = await fetch(url)
    const post = await res.json()

    const output = document.querySelector('#output')

    output.innerHTML = ''


    let template = `
          <div class="card p-3 my-3 post" >
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
          `
    output.innerHTML += template

}


getPost()