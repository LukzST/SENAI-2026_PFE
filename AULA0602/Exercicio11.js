const prompt = require('prompt-sync')();

let palavra = prompt('Digite uma palavra: ')

let a = palavra.slice(0, 3)
console.log(a)

let palavra2 = prompt('Digite outra palavra: ')

let a1 = palavra.length;
a1-=1


console.log(palavra2.slice(a1))