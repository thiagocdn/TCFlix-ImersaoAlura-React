import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button'
import Logo from '../../assets/images/logo.png'
import './styles.css'

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo TCFlix"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;