import { Add, Remove } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/SingleProduct.module.css";

// Paths to be prerendered
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
      {
        params: { productId: "4" },
      },
      {
        params: { productId: "5" },
      },
      {
        params: { productId: "6" },
      },
    ],
    fallback: true,
  };
}

// Fetching the product
export async function getStaticProps({ params }) {
  const { productId } = params;

  try {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const data = await response.json();

    return {
      props: {
        product: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
  }
}

// Rendering the Product component
export default function SingleProduct({ product }) {
  const qty = product ? product.quantity : 1;
  const router = useRouter();
  const [quantity, setQuantity] = useState(qty);
  const [count, setCount] = useState(1);
  const { dispatch } = CartContext();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  // Product count handler
  const handleCount = (param) => {
    if (param === "remove") {
      count > 1 && setCount((prev) => prev - 1);
    } else {
      count < quantity && setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img className={styles.image} src={product.img} />
        </div>
        <div className={styles.info_container}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.price}>{`$ ${product.price}`}</span>
          <div className={styles.quantity}>Available Items: {quantity}</div>

          <div className={styles.add_container}>
            <div className={styles.amount_container}>
              <Remove
                onClick={() => handleCount("remove")}
                style={{ cursor: "pointer" }}
              />
              <span className={styles.amount}>{count}</span>
              <Add
                onClick={() => handleCount("add")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <button
              className={styles.button}
              disabled={quantity === 0}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product, qty: count })
              }
            >
              {quantity > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
