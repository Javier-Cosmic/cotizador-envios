import React from 'react';
import Logo from '../../assets/img/entrega.svg';

const Header = () => (
    <header>
        <img src={Logo} alt='logo' className='logo'/> <h1 className='title'>Cotizador de envios</h1>
    </header>
);

export default Header;
