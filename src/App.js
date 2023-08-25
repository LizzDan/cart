import React, { useState } from 'react';
import './App.css';
import Cart from '../src/cart';

const App = () => {
  const initialCart = [
    { id: 1, name: 'Room 1', price: 10, image: 'item1.jpg' },
    { id: 2, name: 'Room 2', price: 20, image: 'item2.jpg' },
    // Add more items here
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const removeFromCart = roomToRemove => {
    const updatedCart = cartItems.filter(item => item.id !== roomToRemove.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
