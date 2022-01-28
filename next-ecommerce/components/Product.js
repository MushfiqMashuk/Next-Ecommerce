import {
  FavoriteOutlined,
  SearchTwoTone,
  ShoppingCartTwoTone,
} from "@material-ui/icons";
import Link from "next/link";
import styles from "../styles/Product.module.css";

export default function ProductItems({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <img src={item.img} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartTwoTone />
        </div>
        <div className={styles.icon}>
          <Link href={`/${item.id}`}>
            <SearchTwoTone />
          </Link>
        </div>
        <div className={styles.icon}>
          <FavoriteOutlined />
        </div>
      </div>
    </div>
  );
}
