import React, { useContext } from 'react';
import './Home.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import product5 from './images/product5.jpg';
import product6 from './images/product6.jpg';
import product7 from './images/product7.jpg';
import product8 from './images/product8.jpg';
import product9 from './images/product9.jpg';
import { CartContext } from  '../../components/CartContext'; // Importe o contexto do carrinho

const products = [
  { id: 1, name: 'Product 1', image: product1, price: 'R$ 199,99' },
  { id: 2, name: 'Product 2', image: product2, price: 'R$ 299,89' },
  { id: 3, name: 'Product 3', image: product3, price: 'R$ 129,99' },
  { id: 4, name: 'Product 4', image: product4, price: 'R$ 135,99' },
  { id: 5, name: 'Product 5', image: product5, price: 'R$ 159,99' },
  { id: 6, name: 'Product 6', image: product6, price: 'R$ 139,99' },
  { id: 7, name: 'Product 7', image: product7, price: 'R$ 29,99' },
  { id: 8, name: 'Product 8', image: product8, price: 'R$ 10,99' },
  { id: 9, name: 'Product 9', image: product9, price: 'R$ 19,99' },
];

function Home() {
  const { addToCart } = useContext(CartContext); // Obtenha a função addToCart do contexto

  return (
    <div className='Home'>
      <div className="cards">
        <div className="box">
          <img src={image1} alt='skate1' />
        </div>
        <div className="box">
          <img src={image2} alt='skate2' />
        </div>
        <div className="box">
          <img src={image3} alt='skate3' />
        </div>
        <div className="box">
          <img src={image4} alt='skate4' />
        </div>
        <div className="box">
          <img src={image5} alt='skate5' />
        </div>
        <div className="box">
          <img src={image6} alt='skate6' />
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className='product-price'>{product.price}</div>
            <button onClick={() => addToCart(product)}> {/* Chame addToCart com o produto como parâmetro */}
              <span className="buy">COMPRAR</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
