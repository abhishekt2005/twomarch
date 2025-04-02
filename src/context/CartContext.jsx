import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArr, setCartArr] = useState([]);

  // Increment Quantity Function
  const incrementQuantity = (id) => {
    setCartArr((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartArr, setCartArr, incrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
