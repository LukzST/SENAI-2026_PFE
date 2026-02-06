const prompt = require('prompt-sync')();
let Aluno;

function calcularNotas() {
    Aluno = Number(prompt('Digite a nota do aluno: '));
    Aluno = Aluno/2;
    Aluno = Aluno**2;
    console.log("Nota Final do Aluno: " + Aluno);
}

calcularNotas();