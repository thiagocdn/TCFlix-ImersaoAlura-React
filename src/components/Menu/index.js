import React from 'react';

import ButtonLink from '../components/ButtonLink';
import Logo from '../../assets/images/logo.png'
import './styles.css'

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo TCFlix"/>
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;