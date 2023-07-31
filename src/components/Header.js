// Header.js
import React, { useEffect, useState, useContext } from "react";
import logo from "./images/quothwhite.png";
import cartIcon from "./images/cartIcon.png";
import "./estilos/estilosHeader.css";
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CartContext } from './CartContext';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  

  return (
    <header className="header-container">
      <Link to='/'>
        <img alt="logo" className="logo" src={logo} />
      </Link>
      <nav className="nav">
        {isLoggedIn ? (
          <>
            <div className="userLoged">
            <Link to='/carrinho'>
            <div className="cart-container-left">
          
        <div className="cart-icon-container">
          <img alt="cart-icon" className="cart-icon" src={cartIcon} />
          {cartItems.length > 0 && (
            <div className="cart-item-count">{cartItems.length}</div>
          )}
        </div>
      </div>
      </Link>
              <div className="welcome-message">
                Bem-vindo! Lucas
              </div>
              <button onClick={handleLogout} className="buttonLogout">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className="buttonLogin">
                LOGIN
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>

            <Link to='/cadastro'>
              <button className="buttonCadastro">
                CADASTRE-SE
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>
          </>
        )}
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
