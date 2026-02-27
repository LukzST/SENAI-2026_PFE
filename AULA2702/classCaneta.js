class Caneta {
    cor = 'Preta';
    marca = 'BIC';
    ponta = 'fina';
    qtdTinta = 10; //ml
    tampa = false;
    
    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }

    // crie um metodo sublinhar, que recebe um parâmetro valor que vai representar a quantidade gasta de tinta ao sublinhar, 
    // desconte da quantidade de tinta e mostre a qtd restante, porém nao permita que seja subtraida se o valor for maior 
    // do que a qtde de tinta da classe
    sublinhar(valor){
        if (this.qtdTinta < valor) {
            return 'Impossivel realizar a operação'
        } else {
            this.qtdTinta -= valor
            return 'Sublinhando... A quantidade restante de tinta é ' + objCaneta.getQtdTinta()
            
        }
    }

    // criar um metodo recarregar que recebe um valor e soma esse valor a quantidade de tinta da classe, 
    // considerando que a qtde de tinta nao pode ser maior do que 15ml
    recarregar(valor){
        if ((this.qtdTinta + valor) > 15) {
            return 'EXPLODIU A CANETA'
        }
        this.qtdTinta += valor
        return 'A quantidade de tinta depois de recarregar é de ' + objCaneta.getQtdTinta()
    }

    getQtdTinta(){
        return this.qtdTinta;
    }
}

const objCaneta = new Caneta()

//console.log(objCaneta.sublinhar(7))
console.log(objCaneta.recarregar(10));

//console.log(objCaneta.escrever())
//console.log(objCaneta.escrever())
//console.log(objCaneta.escrever())
//console.log('Tinta restante:',objCaneta.getQtdTinta(),'ml')