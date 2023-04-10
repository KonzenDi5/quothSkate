import React from 'react';
import logo from './images/quothwhite.png'
import './estilos/estilosHeader.css'

function Header() {
  return (
    <header>
      <img className='logo' src={logo} />
      <nav className='nav'>
        <ul className='ul'>
          <li className='ki'><a className='a' href="#">Instagram</a></li>
          <li className='li'><a className='a' href="#">Facebook</a></li>
          <li className='li'><a className='a' href="#">Quem somos?</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
