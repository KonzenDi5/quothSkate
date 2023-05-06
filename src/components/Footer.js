import React from 'react';
import './estilos/estiloFooter.css'
import mapa from './images/mapa.png'
import logo from './images/quothwhite.png'
import telefone from './images/telefone.png'

function Footer() {
  return (
    <div className='containerFooter'>
      <div className='logoFooter'>
        <img className='logoQuoth' alt='mapa' src={logo}/>
      </div>
      <div className='contato>'>
        <img className='telefone' alt='mapa' src={telefone}/>
        <p>quothskateshop@contato.com</p>
        <p>(24) 99438-0738</p>
        
      </div>
      <div className='localizacao'>
        <img className='mapa' alt='mapa' src={mapa}/>
        <p>Rua Tocantins - 646, Rio de Janeiro, Brasil</p>
      </div>
    </div>
  );
}

export default Footer;