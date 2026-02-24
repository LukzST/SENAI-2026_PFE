class Veiculo {
    modelo = 'SUV';
    marca = 'Honda - HRV';
    ano = 2025;

    dirigir() {
        console.log('Começou a se mover')
    }
    break(){
        console.log('Parou')
    }
}

const carro = new Veiculo();
carro.dirigir()
carro.break()
