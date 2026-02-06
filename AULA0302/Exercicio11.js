const prompt = require('prompt-sync')();
let a = prompt('Digite um cupom: ');
let preco = 10

if (a === 'OURO') {
    console.log('Desconto de 15%');
    preco = preco - (preco * 0.15);
    console.log('Preço com desconto: R$' + preco);
} else if (a === 'PRATA') {
    console.log('Desconto de 10%');
    preco = preco - (preco * 0.10);
    console.log('Preço com desconto: R$' + preco);
} else if (a === 'BRONZE') {
    console.log('Desconto de 5%');
    preco = preco - (preco * 0.05);
    console.log('Preço com desconto: R$' + preco);
} else {
    console.log("Cupom inválido");
}