import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export default function Context({ children }) {
  const userid = Math.floor(Math.random() * Date.now());
  const [state, dispatch] = useReducer(cartReducer, {
    userid,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export function CartContext() {
  return useContext(Cart);
}
