import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart } = useCart();

  if (!cart.length) {
    return (
      <div>
        <h2> cart is empty </h2>
      </div>
    );
  }

  return (
    <main className={styles.cartHolder}>
      <section className={styles.cartSummery}> cart summery </section>

      <section className={styles.cartDetail}>
        {/* <h2>cart detail</h2> */}
        {cart.map((c) => (
          <article key={c.id} className={styles.cartContainer}>
            <article className={styles.cartDetailDesc}>
              <ul className={styles.listContainer}>
                <li>{c.name}</li>
                {c.description.map((p) => (
                  <li>{p.support}</li>
                ))}

                <li> {c.price} $ </li>
              </ul>
              <div className={styles.btnContainer}>
                <button className={styles.btn}> + </button>
                <span> {c.quantity} </span>
                <button className={styles.btn}> - </button>
              </div>
            </article>
            <div className={styles.imgContainer}>
              <img src={c.image} alt={c.name} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CartPage;
