import Link from "next/link";
import Form from "../../components/Form";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
  const {
    state: { cart },
  } = CartContext();

  return (
    <>
      {cart.length > 0 ? (
        <Form></Form>
      ) : (
        <div>
          <h2>
            Please add something to your cart{" "}
            <span style={{ color: "#1298F6", textDecoration: "underline" }}>
              <Link href="/">
                <a>Go Back to Shopping</a>
              </Link>
            </span>
          </h2>
        </div>
      )}
    </>
  );
}
