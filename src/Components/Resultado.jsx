import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237); 
  margin-top: 2rem;
  padding: 1rem; 
  text-align: center; 
  color: #00838F;
`;

const TextoCotizacion = styled.p`
  color: #00838f; 
  padding: 1rem; 
  font-weight: 600; 
  margon: 0; 
  text-transform: uppercase;
`;

const ResultadoCotizacion = styled.div`
  text-align: center; 
  padding: 0.5rem; 
  border: solid 1px #26c6da; 
  background-color: rgb(127, 224, 237);
  margin-top: 1rem; 
  position: relative;
`;

const Resultado = ({ cotizacion }) => {

  return (
    (cotizacion === 0)
      ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
      : (<ResultadoCotizacion>
        <TransitionGroup
          component="span"
          className="resultado"
        >
          <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter:500, exit: 500 }}
          >
            <TextoCotizacion>El Total a pagar es: <span>${cotizacion}</span> </TextoCotizacion>
          </CSSTransition>
        </TransitionGroup>
      </ResultadoCotizacion>)
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}

export default Resultado;