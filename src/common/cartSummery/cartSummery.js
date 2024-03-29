import { Link} from "react-router-dom";
import { useAuth } from "../../context/auth/authProvider";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./cartsummery.module.css";

const CartSummery = () => {
  const { cart, total } = useCart();
  const auth = useAuth() ;
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className={styles.cartSummeryHolder}>
      <article className={styles.summeryContainer}>
        <h2>cart summery</h2>
        <ul className={styles.summeryList}>
          <div className={styles.summeryPrice}>
            <li className={styles.summeryItem}>Price : {originalTotalPrice}</li>
            <li className={styles.summeryItem}>
              of price : {originalTotalPrice - total}
            </li>
          </div>
          <li className={styles.summeryItem}> total price : {total} </li>
        </ul>
        <Link to={`${auth ? '/checkout' : '/login?redirect=/checkout'}`}>
          <button className={styles.btn} > CheckOut </button>
       </Link> 
      </article>
    </section>
  );
};

export default CartSummery;
