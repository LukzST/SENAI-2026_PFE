import { useContext } from "react";
import { ContextoTema } from "../contextos/temaContexto";
import img from '../assets/a.jpg'
export default function Noticia(){
    const { tema, mudaTema } = useContext(ContextoTema);

    return(
        <>
            <div className="cards">
                <div className={`card-${tema}`}>
                    <img src={img} alt="" />
                    <h1>
                        BRASIL ENTRA EM GUERRA COM MARIANA
                    </h1>
                    <p>
                        mariana queria matar o lula e por ameaça justificada brasil declara guerra
                    </p>
                </div>
                <div className={`card-${tema}`}>
                    <img src={img} alt="" />
                    <h1>
                        BRASIL ENTRA EM GUERRA COM MARIANA
                    </h1>
                    <p>
                        mariana queria matar o lula e por ameaça justificada brasil declara guerra
                    </p>
                </div>
                <div className={`card-${tema}`}>
                    <img src={img} alt="" />
                    <h1>
                        BRASIL ENTRA EM GUERRA COM MARIANA
                    </h1>
                    <p>
                        mariana queria matar o lula e por ameaça justificada brasil declara guerra
                    </p>
                </div>
            </div>
            <button onClick={mudaTema}>
                        Mudar tema para { tema == 'light' ? 'escuro' : 'claro' }
            </button>
        </>
    )
}