const prompt = require("prompt-sync") (   );
const hora = parseInt (prompt ("ingrese las horas"))
const esCoder = prompt ("¿Es coder?")
let total = 0
if (hora === 1){
    total = 3000
}  
    else if (hora > 1){
        total = 3000 + (2000 * (hora - 1))
    }
  if (total >= 20000){
    total = 20000
  }
  if (esCoder === "si"){
    total = (total * 0.85)
  }
  console.log("El total a pagar es:" + total );