import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [itemList, setItemList] = useState([]);

  const updateCart = (item) => {
    setItemList((prevState) => [...prevState, item]);
  };

  const removeItem = (item) => {
    setItemList((prevState) => {
      return prevState.filter((i) => {
        return i !== item;
      });
    });
  };

  const cartContext = {
    itemList: itemList,
    addItem: updateCart,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
