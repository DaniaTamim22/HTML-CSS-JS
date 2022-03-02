const hello = function (){
    console.log('Hello World');
}

const hello2= () => {
    console.log('Hello World 2')
}



const greet= function(name){
    console.log('Hej' + name + 'hur mår du?');
}


const greet2 = (name) => {
    console.log('Hej' + name + 'hur mår du?');
}


const calc= function (numberOne,numberTwo){
    return numberOne+numberTwo;
}

//Behöver kontrollera alla typer 
const calc2= (num1=0,num2=0) => {
    return num1+num2;
}


const tip = function(sum,procent){
    let total= sum + sum*procent;
    return total;
}


//Behöver kontrollera alla typer  
const tip2= (sum,procent) => {
    let total= sum + sum*procent;
    return total;

}