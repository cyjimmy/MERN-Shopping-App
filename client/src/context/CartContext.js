import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

export function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  function updateCart() {
    setCartItemCount((prevCount) => (prevCount += 1));
  }

  return (
    <CartContext.Provider value={cartItemCount}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
