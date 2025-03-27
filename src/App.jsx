import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Tai nghe không dây', description: 'Nghe nhạc đỉnh cao', price: 990000 },
    { id: 2, name: 'Bàn phím cơ', description: 'Đèn RGB, gõ cực phê', price: 1490000 },
    { id: 3, name: 'Chuột gaming', description: 'Chuột LED siêu nhạy', price: 790000 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>🛒 Tech Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
