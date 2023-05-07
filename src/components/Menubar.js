import React, { useState } from 'react';
import "./estilos/Menu.css";
import search from './images/search.png'
import brasil from './images/brasil.png'


function Menubar({ onClick }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick && onClick();
  };
  return (
    <div className="container">
    <nav className='menu'>
      
        <button className="hamburger" onClick={handleClick}>
       <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
        </button>
    
        <ul className={isOpen ? 'show' : 'hide'}>
        <li className='paraSkate'>
          <a href="#">PARA O SKATE</a>
          <ul >
            <li><a href="#">Submenu 1.1</a></li>
            <li><a href="#">Submenu 1.2</a></li>
        

          </ul>
        </li>
        <li>
          <a href="#">VESTIMENTA</a>
          <ul>
            <li><a href="#">Submenu 2.1</a></li>
            <li><a href="#">Submenu 2.2</a></li>
          </ul>
        </li>
        <li>
          <a href="#">HEADSHOP</a>
          <ul>
            <li><a href="#">Submenu 3.1</a></li>
            <li><a href="#">Submenu 3.2</a></li>
            <li><a href="#">Submenu 3.3</a></li>

          </ul>
        </li>
        <li>
          <a href="#">CLUBE QUOTH</a>
        </li>
      </ul>
    </nav>

    <div className="pt-BR">
        pt-BR <img className="brazil" src={brasil} />
    </div>
    <div className="search-container">
      <input
        type="text"
        placeholder="Me diz do que precisa!"
        className="search-input"
      />
      <button className="search-button"><img className="icon" src={search} />
      </button>
    </div>
    </div>
  );
}

export default Menubar;