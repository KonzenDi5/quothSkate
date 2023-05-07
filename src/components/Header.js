import React from "react";
import logo from "./images/quothwhite.png";
import "./estilos/estilosHeader.css";
import {Link} from 'react-router-dom'



function Header() {
  
  return (
    <header>
      <Link to='/'>
      <img alt="logo" className="logo" src={logo} />
      </Link>
      <nav className="nav">
        <Link to='/login'>
      <button className="buttonLogin">
        
          LOGIN
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        
        </button>
        </Link>
        <div>OU</div>
        <Link to='/cadastro'>
        <button className="buttonCadastro">
        
          CADASTRE-SE
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        
        </button>
        </Link>
        <ul className="ul">
          <li className="li">
            <a className="a" href="#">
              Instagram
            </a>
          </li>
          <li className="li">
            <a className="a" href="#">
              Facebook
            </a>
          </li>
          <li className="li">
            <a className="a" href="#">
              Quem somos?
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
