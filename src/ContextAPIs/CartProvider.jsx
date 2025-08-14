import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (course) => {
    if (cart.find((item) => item.id === course.id)) {
      toast.warning("Already in cart");
      return;
    }
    setCart([...cart, course]);
    toast.success('Added course in cart')
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
