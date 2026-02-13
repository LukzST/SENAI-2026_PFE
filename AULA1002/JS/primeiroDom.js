// let nome = 'Lucas';
// alert('Bem vindo ao DOM - ' + nome);

const corpo = document.getElementById('corpo')
const titulo = document.getElementById('titulo')
const texto = document.getElementsByClassName('texto')

corpo.style.backgroundColor = '#0d0048'
titulo.style.color = 'white';
titulo.style.fontFamily = 'arial';
titulo.style.fontSize = '48px'
titulo.textContent += ' - SESI Mirandopolis'

