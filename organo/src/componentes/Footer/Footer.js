import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='redes_sociais'>
                <a>
                    <img src='./imagens/fb.png' alt='fb'></img>
                </a>
                <a href='https://www.instagram.com/_seccolucas/' target="blank">
                    <img src='./imagens/ig.png' alt='ig'></img>
                </a>
                <a href='https://twitter.com/Lukinha_Secco' target="blank">
                    <img src='./imagens/tw.png' alt='tw'></img>
                </a>
            </div>
            <div className='organo'>
                <a>
                    <img src='./imagens/logo.png' alt='logo'></img>
                </a>
            </div>
            <div className='desenvolvimento'>
                <h2>Desenvolvido por Alura</h2>
            </div>
        </div>
    )
}

export default Footer