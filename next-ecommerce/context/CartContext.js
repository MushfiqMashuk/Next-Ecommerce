import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export default function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export function CartContext() {
  return useContext(Cart);
}
