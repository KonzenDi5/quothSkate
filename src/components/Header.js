import React from 'react';
import logo from './images/quothwhite.png'
import './estilos/estilosHeader.css'

function Header() {
  return (
    <header>
      <img className='logo' src={logo} />
      <nav>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Quem somos?</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
