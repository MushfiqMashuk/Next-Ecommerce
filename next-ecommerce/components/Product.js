import {
  FavoriteOutlined,
  SearchTwoTone,
  ShoppingCartTwoTone,
} from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Product.module.css";
import Modal from "./Modal";

export default function ProductItems({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const { dispatch } = CartContext();

  const handleClick = () => {
    // Can not add to cart more than the stock
    if (qty > 0) {
      setQty((prev) => prev - 1);
      dispatch({ type: "ADD_TO_CART", payload: item, qty: 1 });
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <img src={item.img} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartTwoTone onClick={handleClick} />
        </div>
        <div className={styles.icon}>
          <Link href={`/${item.id}`}>
            <a>
              <SearchTwoTone />
            </a>
          </Link>
        </div>
        <div className={styles.icon}>
          <FavoriteOutlined />
        </div>
        <button
          className={styles.quick_view}
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
        <Modal item={item} show={showModal} close={handleClose} />
      </div>
    </div>
  );
}
