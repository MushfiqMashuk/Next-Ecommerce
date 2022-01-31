import { Badge } from "@material-ui/core";
import { SearchTwoTone, ShoppingCartTwoTone } from "@material-ui/icons";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const {
    state: { cart },
  } = CartContext();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.search_container}>
            <input className={styles.input} placeholder="Search" />
            <SearchTwoTone style={{ fontSize: "16px" }} />
          </div>
        </div>
        <div className={styles.center}>
          <Link href="/">
            <a>
              <div className={styles.logo}>LOGO</div>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.menu_item}>REGISTER</div>
          <div className={styles.menu_item}>SIGNIN</div>
          <div className={styles.menu_item}>
            <Link href="/cart">
              <a>
                <Badge color="secondary" badgeContent={cart.length}>
                  <ShoppingCartTwoTone />
                </Badge>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
