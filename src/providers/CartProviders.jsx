import React, { Children, useState } from "react";
import { CartContext } from "./contexts";

const CartProviders = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProviders;
