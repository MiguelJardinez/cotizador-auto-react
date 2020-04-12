import React, { useState } from 'react';
import styled from '@emotion/styled'
import './assets/styles/index.scss'

//Componentes
import Header from './components/Header';
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 600px; 
  margin: 0 auto; 
`;

const ContenedorForumario = styled.div`
  background-color: #FFF; 
  padding: 3rem; 
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      yaer: '',
      plan: ''
    }
  })

  //Estaer Datos
  const { cotizacion, datos } = resumen

  //Darle logica al spinner 
  const [cargando, guardarCargando] = useState(false);

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />

      <ContenedorForumario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}

        <Resumen
          datos={datos}
        />

        {!cargando
          ?
          <Resultado
            cotizacion={cotizacion}
          />
          : null
        }

      </ContenedorForumario>
    </Contenedor>
  );
}

export default App;
