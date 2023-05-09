import Button from "../Button/Button"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"
import { useState } from 'react'

const Formulario = (props) =>{


    //muda o estado (react sabe que tem que renderizar(value atrelado ao estado))
    //o use é um hook, no caso, de estado
    const [time, setTime] = useState('')
    const [pais, setPais] = useState('')
    const [imagem, setImagem] = useState('')
    const [grupo, setGrupo] = useState('')
    //a gente consegue ler o valor (time) e chama o set(setTime) para o react alterar na tela

    const aoSalvar = (evento) => {
        //tira o default e me coloca no controle
        evento.preventDefault()
        props.aoTimeCadastrado({
            time,
            pais,
            imagem,
            grupo
        })
        setTime("")
        setPais("")
        setImagem("")
        setGrupo("")
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu time</h2>

                <CampoTexto obrigatorio={true} label="Time" placeholder="Digite o seu time" valor={time} aoAlterado={valor => setTime(valor)}/>

                <CampoTexto obrigatorio={true} label="Pais" placeholder="Digite o seu pais" valor={pais} aoAlterado={valor => setPais(valor)}/>

                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa obrigatorio={true} label ="Grupo" itens = {props.grupos} valor={grupo} aoAlterado = {valor => setGrupo(valor)}/>

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Formulario