const prompt = require('prompt-sync') ();

let numero = Number(prompt('Digite um numero: '))

let numeroFinal = Math.sqrt(numero)
console.log(numeroFinal)