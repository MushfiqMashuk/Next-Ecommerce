import { Add, Remove } from "@material-ui/icons";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";
import styles from "../../styles/Cart.module.css";

export default function Cart() {
  let total = 0;
  const shipping = 4.90;
  const discount = -2.90;
  const {
    state: { cart },
  } = CartContext();

  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.wrapper}>
          <h1>YOUR BAG</h1>
          <div className={styles.top}>
            <Link href="/">
              <a>
                <button className={styles.top_button}>CONTINUE SHOPPING</button>
              </a>
            </Link>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              {cart.map((product) => {
                console.log(product);
                total += (product.price * product.qty);
                return (
                  <>
                    <div className={styles.product} key={product.id}>
                      <div className={styles.product_details}>
                        <img className={styles.image} src={product.img}></img>
                        <div className={styles.details}>
                          <span>
                            <b>Product:</b> {product.title}
                          </span>
                          <span>
                            <b>ID:</b> {product.id}
                          </span>

                          <span>
                            <b>Size:</b> {product.size}
                          </span>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.amount_container}>
                          <Add style={{ cursor: "pointer" }} />
                          <div className={styles.amount}>{product.qty}</div>
                          <Remove style={{ cursor: "pointer" }} />
                        </div>
                        <div className={styles.product_price}>
                          $ {product.price * product.qty}
                        </div>
                      </div>
                    </div>
                    <hr className={styles.hr} />
                  </>
                );
              })}
            </div>
            <div className={styles.summary}>
              <h1 className={styles.summary_title}>ORDER SUMMARY</h1>
              <div className={styles.summary_item}>
                <span>Subtotal</span>
                <span>$ {total}</span>
              </div>
              <div className={styles.summary_item}>
                <span>Estimated Shipping</span>
                <span>$ {shipping}</span>
              </div>
              <div className={styles.summary_item}>
                <span>Shipping Discount</span>
                <span>$ {discount}</span>
              </div>
              <div
                className={styles.summary_item}
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                <span>Total</span>
                <span>$ {total - (shipping + discount)}</span>
              </div>
              <button className={styles.button}>
                <Link href="/checkout">
                  <a>CHECKOUT NOW</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h2>Your Cart is Empty!</h2>
      )}
    </>
  );
}
