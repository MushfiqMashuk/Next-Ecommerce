import { useEffect } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
  const {
    state: { cart },
  } = CartContext();

  useEffect(() => {
    async function postData() {
      const response = await fetch("http://localhost:4000/products", {
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await response.json();
      console.log(data);
    }

    //postData();
  });

  return <h2>Checkout Page</h2>;
}
