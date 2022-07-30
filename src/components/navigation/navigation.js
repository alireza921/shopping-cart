import { Link } from "react-router-dom";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./navigation.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { useAuth } from "../../context/auth/authProvider";
import SubMena from "../../common/submena/submena";

const Navigation = () => {
  const { cart } = useCart();
  const auth = useAuth();
  return (
    <nav className={styles.headerNavigation}>
      <ul className={styles.listContainer}>
        <li className={`${styles.listItem} ${styles.subMenaHolder} `}>
          {auth ? (
            <>
              <Link to='profile'> {auth.name} </Link>
              <SubMena />
            </>
          ) : (
            <Link to='/login' className={styles.loginLink}>
              <span>Log In</span>
              <TbLogin />
            </Link>
          )}
        </li>

        <li className={styles.listItem}>
          <Link to='/cart' className={styles.shoppingCart}>
            <MdOutlineShoppingCart />
            <span className={styles.inCartNo}> {cart.length} </span>
          </Link>
        </li>
      </ul>

      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link to='/cart'> Cart </Link>
        </li>
        <li className={styles.listItem}>
          <Link to='/'> Home </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
