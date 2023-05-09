import './Grupos.css'

//que nem props, mas mais legal
const Grupos = ({ time, imagem, grupo, pais}) => {
    return(
        <div className="grupo">
            <div className="cabecalho">
                <img src={imagem} alt ={time} id='logo'/>
            </div>
            <div className="rodape">
                <h4>{time}</h4>
                <h5>{pais}</h5>
            </div>
        </div>
    )
}

export default Grupos