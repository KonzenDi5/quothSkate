import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../components/CartContext';
import './Carrinho.css';

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R$ ', '')), 0);
  };

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Valor da Entrega</th>
            <th>Valor do Produto</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(itemQuantities).map(itemId => {
            const item = cartItems.find(item => item.id === Number(itemId));

            if (!item) {
              return null;
            }

            return (
              <tr className='itens' key={itemId}>
                <td>
                  <img className='imagem-item
                  ' src={item.image} alt={item.name} />
                  {item.name}
                </td>
                <td className="quantity-buttons">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{itemQuantities[itemId]}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </td>
                <td>{item.deliveryPrice}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='comprar'>
        <div className="cart-total">Total: R$ {calculateTotal()}</div>
        <div className='button-comprar'>COMPRAR</div>
      </div>
    </div>
  );
}

export default Cart;
