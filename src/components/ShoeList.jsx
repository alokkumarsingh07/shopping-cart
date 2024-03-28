import React from "react";
import ShoeItem from "./ShoeItem";

const ShoesList = ({ shoes, addToCart, removeFromShoes }) => {
  return (
    <div>
      <h2>Available Shoes</h2>
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe} addToCart={addToCart} removeFromShoes={removeFromShoes} />
      ))}
    </div>
  );
};

export default ShoesList;
