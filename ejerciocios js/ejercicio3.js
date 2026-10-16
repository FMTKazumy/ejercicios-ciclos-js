const prompt = require('prompt-sync')();
let numero = parseInt(prompt("ingrese un numero: "));

if (numero < 0){
    console.log ("Numero no valido ");
}else{
    for (let i = numero; i >= 0; i--){
        console.log(i)
    }
        console.log("despegue")
    }



 
