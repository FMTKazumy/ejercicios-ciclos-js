/* contador de 1 a 10
for (let i = 1; i <= 10; i ++){
  console.log (i)
}

contador de 20 a 1
for (let i = 20; i >= 1; i--){
  console.log (i)
}
imprimir el resultado de multiplicar el 5 por cada número del 1 al 10
for (let i = 1; i <= 10; i++ ){
console.log (" La multiplicacion de 5 x " + i + " = " + ( 5 * i) )
}

mostrar en consola todos los números pares que existen entre el 1 y el 30.
for (let i = 1; i <= 30; i++){
  if (i % 2 === 0) 
  console.log (i)
}

//sumar todos los números del 1 al 50 y mostrar el resultado final.
let total = 0
for (let i = 1; i <= 50; i++){
  total = total + i
}
console.log("la suma de todos los numeros del 1 al 50 es igual a: " + (total) );



//ejerciocios intermedios 
ejercicio FizzBuzz
for (let i = 1; i <= 30; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(" FizzBuzz ")
  }else if (i % 3 === 0 ){
    console.log(" Fizz ")}
    else if (i % 5 === 0){
    console.log(" Buzz ")
    }
     else{
      console.log(i)
    }
}
ejercicio leer cuantas "a" hay en la frase
let frase = "programar en javascript es demasiado asombroso"
let cantidadLetras = 0

for(let i = 0; i < frase.length; i++){
  if (frase[i] === "a" ){
    cantidadLetras++

  }
 }
 console.log("La cantidad de veces que se repite la leta a en la frase es de " + (cantidadLetras) + " veces ")


let numeros = [5, 3, -5, -1, 8, 9, 14, -20, -4, 3, 7, 11, -12, -798]
let sumaTotal = 0
Suma una lista de números que tú elijas, pero el ciclo debe ignorar por completo los números negativos si encuentra alguno.
for (let i = 0; i < numeros.length; i++){
  if (numeros [i] < 0){
    continue; //"Ok, no me importa lo que quede pendiente abajo dentro de este ciclo por esta vuelta; me lo salto y voy directo a la siguiente iteración".
  }
    (sumaTotal += numeros[i])
}
console.log(" La suma de los numeros positivos es de: " + sumaTotal )

Toma una palabra y, utilizando un ciclo, genera una nueva variable que contenga esa misma palabra escrita al revés (ej: "hola" \(\rightarrow \) "aloh").


let palabra = "esternocleidomastoideo"
let palabraInvertida = ""
for (let i = palabra.length -1; i >= 0; i--) { 
( palabraInvertida += palabra[i])
}
console.log(" La palabara invetida es " + palabraInvertida)


 Calcula el factorial de un número entero positivo.

let numeroBase = 5
let resultadoFactorial = 1

for(let i = 1; i <= numeroBase; i++ ){
  ( resultadoFactorial *= i )
}
console.log("El factorial del numero ingresado es " + resultadoFactorial) 
*/
