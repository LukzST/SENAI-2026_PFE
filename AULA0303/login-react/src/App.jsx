import './App.css'
import logoSesi from './assets/img/sesi-logo.jpg'
import logoSenai from './assets/img/senai-logo.png'

function App() {
  return (
    <div className='container'>
      <img src={logoSesi} alt="" className='logo-sesi' />
      <img src={logoSenai} alt="" className='logo-senai' />
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      <label htmlFor="nome" className='label'>Nome</label>
      <input type="text" className='campo' id='nome' placeholder='Seu nome'/>
      <label htmlFor="senha" className='label'>Senha</label>
      <input type="text" className='campo' id='senha' placeholder='Sua senha'/>
      <button className="botao">Log in</button>
      <a href="#" className="link1">Esqueceu a senha?</a>
      <a href="#" className="link">Cadastre-se!</a>
    </div>
  )
}

export default App
