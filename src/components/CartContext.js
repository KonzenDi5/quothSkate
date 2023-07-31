// CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter((cartItem) => cartItem.quantity > 0);

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
