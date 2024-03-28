import React, { useState, useEffect } from "react";
import ShoesList from "./components/ShoeList";
import ShoppingCart from "./components/ShoppingCart";
import ShoeForm from "./components/ShoeForm";
const App = () => {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("cart in add to cart = ", cart);
  };

  const removeFromCart = (itemToRemove) => {
    console.log("function called")
    let index = cart.lastIndexOf(itemToRemove);
    // console.log("index = ",index)
    // console.log("id = ", id);
    cart.splice(index, 1);  
    const newCart = cart.slice();
    console.log("newCart = ", newCart);
    setCart(newCart);
    // setCart(cart.splice(index, 1));
    // console.log("cart after setting = ", cart);
  };

  const removeFromShoes = (shoeToRemove) => {
    setShoes(shoes.filter((shoe) => shoe !== shoeToRemove));
  };

  const handleFormSubmit = (event, newShoe) => {
    event.preventDefault();
    setShoes([...shoes, newShoe]);
  };

  useEffect(() => {
    console.log("cart = ", cart);
    console.log("shoes = ", shoes);
  }, [removeFromCart]);

  return (
    <div>
      <ShoesList
        shoes={shoes}
        addToCart={addToCart}
        removeFromShoes={removeFromShoes}
      />
      {cart?.length ? (
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <h1>Test</h1>
      )}
      <ShoeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
