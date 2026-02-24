class Pessoa{
    nome;
    #cpf;
    #salario;

    setCpf(valor){
        this.#cpf = valor
    }
    getCpf(valor){
        return this.#cpf
    }
    setSalario(valor){
        this.#salario = valor
    }
    getSalario(valor){
        return this.#salario
    }
}

const pessoas = new Pessoa();
pessoas.nome = 'Lucas'
pessoas.setCpf(40028922)
console.log(pessoas.getCpf())
pessoas.setSalario(10000000000)
console.log(pessoas.getSalario())

console.log(pessoas)