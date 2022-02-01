import styles from "../../styles/OrderDetails.module.css";

export default function OrderDetails({ order }) {
  let total = 0;
  const { cart } = order;

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Order Details</h1>
        <p className={styles.p}>Oder Code: # {order.id}</p>
        <p className={styles.p}>Placed on: {order.date}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.product_container}>
          {cart &&
            cart.map((product) => {
              total += product.price;
              return (
                <div>
                  <div className={styles.product}>
                    <img
                      src={product.img}
                      alt={product.title}
                      className={styles.image}
                    />
                    <div className={styles.desc}>
                      <p className={styles.info_p}>{product.title}</p>
                      <p className={styles.info_p}>
                        Category: {product.category}
                      </p>
                      <p className={styles.info_p}>Quantity: {product.qty}</p>
                      <p className={styles.info_p}>Size: {product.size}</p>
                    </div>

                    <p style={{fontSize: "1.2rem", fontWeight: 500}}>Price: ${product.price}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          <h2>Total: $ {total}</h2>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title} style={{ color: "#627580" }}>
            Deliver to:
          </h1>
          <p className={styles.p} style={{ color: "#39a085" }}>
            {order.username}
          </p>
          <p className={styles.p} style={{ color: "#39a085" }}>
            {order.email}
          </p>

          <hr />

          <p
            className={styles.p}
            style={{ color: "#627580", margin: "20px 0px" }}
          >
            {order.address}
          </p>

          <p
            className={styles.p}
            style={{ color: "#39a085", fontStyle: "italic", fontWeight: 500 }}
          >
            Thank you for shopping with us!
          </p>

          <p
            className={styles.p}
            style={{ color: "#39a085", fontStyle: "italic", fontWeight: 500 }}
          >
            You can track the status of your purchased product in this page
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { orderId },
  } = context;

  const response = await fetch(`http://localhost:4000/orders/${orderId}`);
  const data = await response.json();

  return {
    props: {
      order: data,
    },
  };
}
