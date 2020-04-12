import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

import { primerMayuscula } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center; 
    background-color: #00838F; 
    color: white;
    margin-top: 1rem;
`;


const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
          <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Año: {primerMayuscula(year)} </li>
                <li>Plan: {primerMayuscula(plan)} </li>
            </ul>
        </ContenedorResumen>
    );
}; 

Resumen.protoType = {
    datos: PropTypes.object.isRequired
}

export default Resumen;