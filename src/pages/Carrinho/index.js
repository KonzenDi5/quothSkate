// Cart.js
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../components/CartContext';
import './Carrinho.css';

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    // Função para calcular a quantidade total de cada item no carrinho
    const calculateItemQuantities = () => {
    const quantities = {};
    cartItems.forEach(item => {
      if (item.id in quantities) {
        quantities[item.id] += 1;
      } else {
        quantities[item.id] = 1;
      }
    });
    return quantities;
  };

  setItemQuantities(calculateItemQuantities());
}, [cartItems]);
  // Função para calcular o total da compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R$ ', '')), 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {/* Renderize os itens do carrinho com bolinha vermelha mostrando a quantidade */}
        {Object.keys(itemQuantities).map(itemId => {
          const item = cartItems.find(item => item.id === Number(itemId));

          // Adicione a verificação para garantir que os dados do item existam
          if (!item) {
            return null;
          }

          return (
            <div key={itemId} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>{item.name}</div>
              <div>{item.price}</div>
              {/* Exibir a bolinha vermelha com a quantidade */}
              {itemQuantities[itemId] > 0 && (
                <div className="item-quantity">{itemQuantities[itemId]}</div>
              )}
              <button onClick={() => addToCart(item)}>Adicionar</button>
              {/* Adicionar verificação para evitar erro ao remover item que não está no carrinho */}
              {itemQuantities[itemId] > 0 && (
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              )}
            </div>
          );
        })}
      </div>
      {/* Mostrar o total da compra */}
      <div className='comprar'>
      <div className="cart-total">Total: R$ {calculateTotal()}</div>
      <div className='button-comprar'>COMPRAR</div>
      </div>
    </div>
  );
}

export default Cart;
