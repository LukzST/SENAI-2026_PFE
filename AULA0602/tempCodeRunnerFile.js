const prompt = require('prompt-sync') ();

let numero = Number(prompt('Digite um numero que não seja inteiro: '))

let numeroFinal = Math.random()*100
let numeroFix = Math.round(numeroFinal)
console.log(numeroFix)