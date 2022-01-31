import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import styles2 from "../styles/SingleProduct.module.css";

export default function Modal({ item, show, close, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className={styles.overlay} onClick={() => close()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.button} onClick={() => close()}>
            X
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.image_container}>
            <img src={item.img} alt={item.title} className={styles.image} />
          </div>
          <div
            className={styles.info_container}
            style={{ paddingLeft: "10px" }}
          >
            <h1 className={styles2.title}>{item.title}</h1>
            <p className={styles2.description}>{item.description}</p>
            <span className={styles2.price}>{`$ ${item.price}`}</span>
            <div className={styles2.quantity}>
              Available Items: {item.quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else return null;
}
