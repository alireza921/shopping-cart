import { useCart } from "../../context/cartprovider/cartprovider";
import { renderCart } from "../../utils/renderCart";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart } = useCart();
  return <main className={styles.cartHolder}>{renderCart(cart)}</main>;
};

export default CartPage;
