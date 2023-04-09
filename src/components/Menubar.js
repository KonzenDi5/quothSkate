import React from "react";
import "./estilos/Menu.css";
import search from './images/search.png'
import brasil from './images/brasil.png'

function Menubar() {
  return (
    <div className="container">
    <nav className="menu">
      <ul>
        <li>
          <a href="#">PARA O SKATE</a>
          <ul>
            <li><a href="#">Submenu 1.1</a></li>
            <li><a href="#">Submenu 1.2</a></li>
            <li><a href="#">Submenu 1.3</a></li>
            <li><a href="#">Submenu 1.4</a></li>
            <li><a href="#">Submenu 1.5</a></li>
            <li><a href="#">Submenu 1.6</a></li>
          </ul>
        </li>
        <li>
          <a href="#">VESTIMENTA</a>
          <ul>
            <li><a href="#">Submenu 2.1</a></li>
            <li><a href="#">Submenu 2.2</a></li>
            <li><a href="#">Submenu 2.3</a></li>
            <li><a href="#">Submenu 2.4</a></li>
            <li><a href="#">Submenu 2.5</a></li>
            <li><a href="#">Submenu 2.6</a></li>
          </ul>
        </li>
        <li>
          <a href="#">HEADSHOP</a>
          <ul>
            <li><a href="#">Submenu 3.1</a></li>
            <li><a href="#">Submenu 3.2</a></li>
            <li><a href="#">Submenu 3.3</a></li>
            <li><a href="#">Submenu 3.4</a></li>
            <li><a href="#">Submenu 3.5</a></li>
            <li><a href="#">Submenu 3.6</a></li>
          </ul>
        </li>
        <li>
          <a href="#">CLUBE QUOTH</a>
          <ul>
            <li><a href="#">Submenu 4.1</a></li>
            <li><a href="#">Submenu 4.2</a></li>
            <li><a href="#">Submenu 4.3</a></li>
            <li><a href="#">Submenu 4.4</a></li>
            <li><a href="#">Submenu 4.5</a></li>
            <li><a href="#">Submenu 4.6</a></li>
          </ul>
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