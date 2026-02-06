const prompt = require('prompt-sync') ();

let numero = Number(prompt('Digite um numero que não seja inteiro: '))

let numeroFinal = Math.round(numero)
console.log(numeroFinal)