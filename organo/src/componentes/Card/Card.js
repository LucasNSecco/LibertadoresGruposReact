import Grupos from '../Grupos/Grupos'
import './Card.css'

const Card = (props) => {
    const cssBackground = { backgroundColor: props.corSecundaria}
    const cssText = { borderColor: props.corTerciaria, color: props.corPrimaria }
    return(
        (props.times.length > 0) && <section className='card' style={cssBackground}>
            <h3 style={cssText}>{props.grupo}</h3>
            <div className='times'>
                {props.times.map(time => <Grupos key={time.time}
                time={time.time} 
                imagem={time.imagem}
                pais={time.pais}
                />)}  
            </div>
        </section>
    )
}

export default Card

