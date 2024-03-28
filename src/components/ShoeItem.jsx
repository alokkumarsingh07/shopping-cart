import React from "react";

const ShoeItem = ({ shoe, addToCart, removeFromShoes }) => {
  const { id, name, description, price, sizes } = shoe;

  const handleAddToCart = (size) => {
    addToCart({ id, name, price, size });
  };

  return (
    <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "space",
    gap:"10px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Sizes: {sizes}</p>
      <button onClick={() => removeFromShoes(shoe)}>Remove</button>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        
      {/* <select onChange={(e) => handleAddToCart(e.target.value)}>
        <option value="">Select Size</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default ShoeItem;
