import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./checkout-item.styles.scss";

const CheckoutCartItem = ({ item }) => {
  const { price, name, quantity, imageUrl } = item;
  const { removeItemFromCart, addItemToCart, removeCompleteItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(item);
  const addProductToCart = () => addItemToCart(item);
  const clearCartItemHandler = () => removeCompleteItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#88;
      </div>
    </div>
  );
};

export default CheckoutCartItem;
