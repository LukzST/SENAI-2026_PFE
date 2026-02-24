class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    setModelo(valor){
        this.#modelo = valor
    }
    getModelo(valor){
        return this.#modelo
    }
    setMarca(valor){
        this.#marca = valor
    }
    getMarca(valor){
        return this.#marca
    }
    setCor(valor){
        this.#cor = valor
    }
    getCor(valor){
        return this.#cor
    }
    setVelocidade(valor){
        this.#velocidadeMaxima = valor
        if (this.#velocidadeMaxima > 35) {
            this.#velocidadeMaxima = 35
        }
    }
    getVelocidade(valor){
        return this.#velocidadeMaxima
    }
}

const BMX = new Bicicleta()

BMX.setModelo('Modelo Daora')
console.log('Modelo: '+BMX.getModelo())
BMX.setMarca('SPEED')
console.log('Marca: '+BMX.getMarca())
BMX.setCor('Preta')
console.log('Cor: '+BMX.getCor())
BMX.setVelocidade(36)
console.log(BMX.getVelocidade()+'Km/h');