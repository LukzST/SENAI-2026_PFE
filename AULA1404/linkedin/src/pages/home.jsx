import icon from '../assets/a.svg'
import './home.css'
import home_icon from '../assets/home_icon.svg'
import rede_icon from '../assets/rede_icon.svg'
import vaga_icon from '../assets/vagas_icon.svg'
import search_icon from '../assets/search_icon.svg'
import msg_icon from '../assets/msg_icon.png'
import not_icon from '../assets/not_icon.svg'
import sol from '../assets/sol.png'

import backpic from '../assets/backpic.jpg'

export default function Home() {
    return (
        <>
            <header>
                <img src={icon} className="icon-link" width="40px" height="40px" alt="" />
                <input type="text" className='input search' placeholder='Pesquisar' />
                <nav>
                    <a href="" className='item-link'>
                        <img src={home_icon} alt="" />
                        Início
                    </a>
                    <a href="" className='item-link'>
                        <img src={rede_icon} alt="" width="30px" />
                        Minha rede
                    </a>
                    <a href="" className='item-link'>
                        <img src={vaga_icon} alt="" width="30px"/>
                        Vagas
                    </a>
                    <a href="" className='item-link'>
                        <img src={msg_icon} alt="" width="30px"/>
                        Mensagens
                    </a>
                    <a href="" className='item-link'>
                        <img src={not_icon} alt="" width="30px"/>
                        Notificações
                    </a>

                    <div className="barra">

                    </div>

                    <a href="" className='item-link'>
                        <img src={sol} alt="" width="30px" />
                        Solucões
                    </a>
                </nav>
            </header>


            <main>
                <div className="section1">

                    <div className="profile-card">
                        <div className="profile-card-header">
                        </div>
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" width="200px" alt="" />
                            </div>

                        <div className="profile">
                            
                        <div className="profile-desc">
                            <h1 className="name">
                                Lucas Eduardo
                            </h1>
                            <h4 className="role">
                                Desenvolvedor
                            </h4>
                            <p className="bio">
                                Desenvolvedor Front-End
                            </p>
                            
                            <p className="info-follow">
                                ??? Seguidores • ??? Conexões
                            </p>
                    

                            <div className="buttons">
                            <button className='action-profile'>
                                Mensagem
                            </button>
                            <button className='action-profile-outlined'>
                                Mais
                            </button>
                            </div>

                        </div>

                        <div className="empresas">
                            <div className="empresa">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" width="30px" height="30px" className='empresas-img' alt="" />
                                <h4>
                                    Teste
                                </h4>
                            </div>
                            <div className="empresa">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" width="30px" height="30px" className='empresas-img' alt="" />
                                <h4>
                                    Teste
                                </h4>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div className="destaque-card">
                        <h1 className="title-destaque">
                            Destaques
                        </h1>

                        <div className="pub">

                            <div className="card-destaque">
                                <h4 className="titulo-foda">
                                    Publicação
                                </h4>
                                <p className="legenda">
                                    Legenda da primeira publicacão
                                </p>

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" alt="" />
                            
                                <div className="extra">
                                    <p className="views">
                                        100
                                    </p>

                                    <p className="coments">
                                        5 comentarios
                                    </p>
                                </div>
                            </div>
                            <div className="card-destaque">
                                <h4 className="titulo-foda">
                                    Publicação
                                </h4>
                                <p className="legenda">
                                    Legenda da primeira publicacão
                                </p>

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" alt="" />
                            
                                <div className="extra">
                                    <p className="views">
                                        100
                                    </p>

                                    <p className="coments">
                                        5 comentarios
                                    </p>
                                </div>
                            </div>
                            <div className="card-destaque">
                                <h4 className="titulo-foda">
                                    Publicação
                                </h4>
                                <p className="legenda">
                                    Legenda da primeira publicacão
                                </p>

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" alt="" />
                            
                                <div className="extra">
                                    <p className="views">
                                        100
                                    </p>

                                    <p className="coments">
                                        5 comentarios
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="atv">
                        <h1 className="title-destaque">
                            Atividades
                        </h1>
                        <h5>
                            ??? seguidores
                        </h5>

                        <div className="card-atv">
                            <h3>
                                Luiz Otávio publicou isso • 1sem
                            </h3>

                            <div className="img-text">
                                <img src={backpic} alt="" />
                                <p className="legenda">
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>

                            <div className="extra-1">
                                    <p className="views">
                                        100
                                    </p>

                                    <p className="coments">
                                        5 comentarios
                                    </p>
                            </div>
                        </div>
                        <div className="card-atv">
                            <h3>
                                Luiz Otávio publicou isso • 1sem
                            </h3>

                            <div className="img-text">
                                <img src={backpic} alt="" />
                                <p className="legenda">
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>

                            <div className="extra-1">
                                    <p className="views">
                                        100
                                    </p>

                                    <p className="coments">
                                        5 comentarios
                                    </p>
                            </div>
                        </div>

                        <div className="exibir">
                            Exibir todas as atividades
                        </div>


                    </div>




                    <div className="sobre">
                        <h2>
                            Sobre
                        </h2>
                        <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </div>



                    <div className="experiencias">
                    <h2>
                        Experiencias
                    </h2>

                    <div className="card-experiencias">
                        <img src={backpic} alt="" />
                        <div className="textodaora">
                        <h3>
                            Empresa
                        </h3>
                        <p className="detalhe">
                            1 a 7 m
                        </p>
                        </div>
                    </div>
                    <div className="crono">
                        <h1>
                            Fullstack Developer
                        </h1>
                        <h2>
                            Tempo integral
                        </h2>
                        <p>
                            jan de 2022 - o momento • 5 meses
                            Cidade, estado e país
                        </p>
                    </div>
                    <div className="crono-1">
                        <h1>
                            Fullstack Developer (JR)
                        </h1>
                        <h2>
                            Tempo integral
                        </h2>
                        <p>
                            jUn de 2021 - jan de 2022 • 8 meses
                            Cidade, estado e país
                        </p>
                    </div>
                    <div className="crono-1">
                        <h1>
                            Front-end Developer
                        </h1>
                        <h2>
                            Tempo integral
                        </h2>
                        <p>
                            jan de 2021 - jun de 2021 • 6 meses
                            Cidade, estado e país
                        </p>
                    </div>
                </div>



                <div className="formacao">
                    <h1>
                        Formação Academica
                    </h1>

                    <div className="formacao-card">

                        <img src={backpic} alt="" />
                        <div className="formacao-text">
                            <h3>
                                Instituição de ensino
                            </h3>
                            <h4>
                                nome do curso
                            </h4>
                            <p>
                                2015 a 2019
                            </p>
                        </div>
                    </div>
                </div>

                <div className="idioma">
                    <h1>
                        Idiomas
                    </h1>

                    <div className="idioma-card">
                        <div className="idioma-text">
                            <h3>
                                Português
                            </h3>
                            <h4>
                                nativo
                            </h4>
                        </div>
                    </div>
                    <div className="idioma-card-2">
                        <div className="idioma-text">
                            <h3>
                                Ingles
                            </h3>
                            <h4>
                                intermediario
                            </h4>
                        </div>
                    </div>
                </div>

                </div>

                <div className="section2">
                    
                    <div className="viram">
                        <div className="viram1">
                            <div className="header">
                                <h2>
                                    As pessoas também viram
                                </h2>
                            </div>

                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people">
                                    Enviar Mensagem
                                </a>
                                </div>
                            </div>
                        </div>


                        <div className="viram1 margin">
                            <div className="header">
                                <h2>
                                    Pessoas que você talvez conheça
                                </h2>
                            </div>

                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                            <div className="people">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDjFXszygMfMQ2kGMzNw0guyrMRoUBq0NQ&s" className='empresa-img' alt="" />
                                <div className="text">
                                    <h3 className="name-people">
                                        Ellefer Fernanda
                                    </h3>
                                    <h4>
                                        Desenvolvedoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </h4>
                                <a href="" className="btn-people-2">
                                    Conectar
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}