import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutCartItem = ({ item }) => {
  const { price, name, quantity } = item;
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItemFromCart(item);
  };

  const addProductToCart = () => {
    addItemToCart(item);
  };

  return (
    <div className="item-container">
      <div>{name}</div>
      <div>
        <button type="button" onClick={addProductToCart}>
          +
        </button>
        <span>{quantity}</span>
        <button onClick={removeItemHandler} type="button">
          -
        </button>
      </div>
      <div>{price}</div>
      <div>
        <button type="button">Remove</button>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
