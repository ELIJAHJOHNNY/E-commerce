import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import commerce from './lib/commerce';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  };

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  };

  const handleUpdateCartQty = async (productId, quantity) =>{
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId, quantity) =>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

    return (
      <div>
         <Header totalItems={cart.total_items}/> 
         <Routes>
          <Route path='/' element={
             <ProductsList 
             products={products}
             onAddToCart={handleAddToCart}/>
          }>
          </Route>
          <Route path='cart' element={
             <Cart 
             cart={cart} handleRemoveFromCart= {handleRemoveFromCart}  handleUpdateCartQty= {handleUpdateCartQty} handleEmptyCart= {handleEmptyCart}
             />
          }>
          </Route>
         </Routes> 
      </div>
    );
};

export default App;