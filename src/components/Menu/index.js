import React from 'react';

import Button from '../Button'
import Logo from '../../assets/images/logo.png'
import './styles.css'

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo TCFlix"/>
      </a>

      <Button className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;