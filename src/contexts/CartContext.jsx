import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //check if the product to add already exists in the cart
  const itemExists = cartItems.find((item) => item.id === productToAdd.id);

  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if the product to add is not already present in the cart then, create a new entry in the cartItems array with the productToAdd as the latest entry with an additional field of quantity set to 1
  else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemToRemove = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (itemToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
