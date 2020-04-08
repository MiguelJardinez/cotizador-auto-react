import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = ({ titulo }) => {

    return(
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}

export default Header;