const btn= document.querySelector('#btnAlert')
const square=document.querySelector('#square')
const loginForm = document.querySelector('#loginForm')
const firstName= document.querySelector('#firstName')


btn.addEventListener('click', () => {
console.log('eventet kördes')
})



square.addEventListener('mousemove',(e)=>{
    // console.log(e.offsetX,e.offsetY)
square.style.background=`rgb(${e.offsetX},${e.offsetY},0)`
})



firstName.addEventListener('keyup', e =>{
    console.log(e.key)
})

firstName.addEventListener('focus',e=>{
    firstName.classList.add('focus-red')
})
 
firstName.addEventListener('blur',e=>{
    firstName.classList.remove('focus-red')
})


loginForm.addEventListener('submit',e => {
    e.preventDefault()
    if(firstName.value.trim() === '')
    return;
    console.log(firstName.value)
})