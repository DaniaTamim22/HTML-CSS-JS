let firstName= 'Dania'
let lastName = 'Tamim'

const fullname = function(fname,lname) {
    let fullname= `${fname} ${lname}`;
    return fullname;

}

console.log(fullname(firstName,lastName))


const greet = (name) => {
    console.log(`Hej ${name} Hur är läget?`)
}

greet(firstName);

let names = ['Dania','Zain', 'Layan']

names.forEach(name => {
    console.log(name)
})


const minFunction = (nr1,nr2, cb) => {
    setTimeout(() => {
        let sum = +nr1 +nr2
        cb(sum)
    },2000)
}

minFunction(5,10,(data)=>{
    console.log(data)
})