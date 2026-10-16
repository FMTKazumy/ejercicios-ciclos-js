const prompt = require('prompt-sync')();

console.log("--- Clasificador de Temperatura ---");
const input = prompt("Ingresa la temperatura en grados Celsius: ");
const temperatura = parseFloat(input);

// Validación de si el valor ingresado no es un número
if (isNaN(temperatura)) {
    console.log("Error: El valor ingresado no es un número válido.");
} else {
    // Clasificación de la temperatura
    if (temperatura < 10) {
        console.log("Hace frío, lleva chaqueta");
    } else if (temperatura >= 10 && temperatura <= 24) {
        console.log("Clima templado");
    } else {
        console.log("Hace calor, hidrátate");
    }
}
