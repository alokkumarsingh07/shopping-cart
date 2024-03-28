import React,{useEffect} from "react";

const ShoppingCart = ({ cart, removeFromCart }) => {

  useEffect(()=>{
    console.log("in ShoppingCart = ",cart);
    // console.log("shoes = ",shoes);
  })

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Size: {item.size} - Price: {item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
