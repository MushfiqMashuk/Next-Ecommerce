import React from "react";
import ProductItems from "../components/Product";
import styles from "../styles/Home.module.css";

export default function AllProducts({ products }) {
  return (
    <>
      <h2>All Products</h2>

      <div className={styles.container}>
        {products.map((product) => {
          return <ProductItems item={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
