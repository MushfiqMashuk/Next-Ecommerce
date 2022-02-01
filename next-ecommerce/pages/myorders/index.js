import Link from "next/link";
import styles from "../../styles/MyOrders.module.css";

export default function MyOrders({ orders }) {
  return (
    <>
      <div className={styles.container}>
        <h3>Your Orders</h3>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <h2>
                Order: #
                <Link href={`myorders/${order.id}`}>
                  <a>
                    <span>{order.id}</span>
                  </a>
                </Link>
              </h2>
              <p>{order.date}</p>
              <hr
                style={{
                  height: "1px",
                  border: "none",
                  backgroundColor: "#eee",
                }}
              />
            </div>
          ))
        ) : (
          <h2>Oops! You don't have any order</h2>
        )}
      </div>
    </>
  );
}

// Server Side Rendering
export async function getServerSideProps(context) {
  const { req } = context;

  const userid = req.headers.cookie.split("=")[1];

  const response = await fetch(`http://localhost:4000/orders?userid=${userid}`);

  const data = await response.json();

  return {
    props: {
      orders: data,
    },
  };
}
