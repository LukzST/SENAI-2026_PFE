const dataAtual = new Date();
const fimDoAno = new Date(dataAtual.getFullYear(), 11, 31);

const diferencaMs = fimDoAno - dataAtual;
const diasRestantes = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

console.log('Faltam ',diasRestantes,' dias para o fim do ano.');
