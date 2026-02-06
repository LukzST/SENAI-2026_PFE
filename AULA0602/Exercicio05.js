const prompt = require('prompt-sync') ();

let dataAtual = new Date()
let dataUsuario = prompt('Qual o seu ano de nascimento: ')

let ano = dataAtual.getFullYear()

let Idade = ano - dataUsuario

console.log(Idade)