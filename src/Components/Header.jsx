import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';


const Header = ({ titulo }) => {

    return(
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;