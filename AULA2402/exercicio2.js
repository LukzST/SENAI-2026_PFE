class Cidade {
    qtdeHabitantes = 630000;
    estado = 'British Columbia (BC)';
    nome = 'Vancouver';

    mostrar(){
        console.log(this.qtdeHabitantes)
        console.log(this.estado)
        console.log(this.nome)
    }
}


const registro = new Cidade()
registro.mostrar()