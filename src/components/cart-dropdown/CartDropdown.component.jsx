import React, { useContext } from "react";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../contexts/CartContext";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
