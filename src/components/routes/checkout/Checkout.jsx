import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CheckoutCartItem from "../../checkout-cart-item/CheckoutCartItem.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutCartItem key={cartItem.id} item={cartItem} />;
      })}
    </div>
  );
};

export default Checkout;
