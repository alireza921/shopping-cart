import CartDetail from "../../common/cartDetail/CartDetail";
import CartSummery from "../../common/cartSummery/cartSummery";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart } = useCart();
  return (
    <main className={styles.cartHolder}>
      <>
        {!cart.length ? (
          <h2> cart is empty </h2>
        ) : (
          <>
            <CartDetail />
            <CartSummery />
          </>
        )}
      </>
    </main>
  );
};

export default CartPage;
