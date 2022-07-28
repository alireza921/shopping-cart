import { Link } from "react-router-dom";
import CartDetail from "../../common/cartDetail/CartDetail";
import CartSummery from "../../common/cartSummery/cartSummery";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart } = useCart();
  return (
      <>
        {!cart.length ? (
          <div className={styles.cartEmpty}>
            <h2> cart is empty </h2>
            <Link to='/'> Go To Shopping </Link>
          </div>
        ) : (
          <main className={styles.cartHolder}>
            <CartDetail />
            <CartSummery />
          </main>
        )}
      </>
  );
};

export default CartPage;
