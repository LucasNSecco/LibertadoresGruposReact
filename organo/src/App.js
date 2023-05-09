import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Card from './componentes/Card/Card';
import Footer from './componentes/Footer/Footer';

function App() {

  const grupos = [
    {
      grupo: 'Grupo A',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo B',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo C',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo D',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo E',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo F',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo G',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
    {
      grupo: 'Grupo H',
      corPrimaria: '#F0A500',
      corSecundaria: '#0f0f0f',
      corTerciaria: '#CF7500'
    },
  ]

  const [times, setTimes] = useState([])

  const aoNovoTimeAdicionado = (time) => {
    setTimes([...times, time])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario grupos ={grupos.map(grupo => grupo.grupo)} aoTimeCadastrado={time => aoNovoTimeAdicionado(time)}/>
      {grupos.map(grupo => <Card 
      key={grupo.grupo} 
      grupo={grupo.grupo} 
      corPrimaria={grupo.corPrimaria} 
      corSecundaria={grupo.corSecundaria} 
      corTerciaria={grupo.corTerciaria}
      times={times.filter(time => time.grupo === grupo.grupo)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
