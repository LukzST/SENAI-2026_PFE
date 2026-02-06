const prompt = require('prompt-sync') ();

let numero = Number(prompt('Digite um numero: '))

let numeroFinal = Math.random()*100
let numeroFix = Math.round(numeroFinal)
console.log('Numero Aleatorio: ',numeroFix)
console.log('Numero Digitado: ',numero)
if (numero == numeroFix) {
    console.log("São Iguais")
} else {
    console.log("Não são iguais")
}
