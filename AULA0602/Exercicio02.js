const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite a idade do Usuario: '));

if (idade >= 16 || idade > 18) {
    console.log('O usuario pode pegar livros');
} else { 
    console.log('O usuario não pode pegar livros');
}