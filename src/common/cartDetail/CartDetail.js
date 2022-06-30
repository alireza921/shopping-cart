import {
  useCart,
  useCartAction,
} from "../../context/cartprovider/cartprovider";
import styles from "./cartdetail.module.css";
import { FaTrash } from "react-icons/fa";
const CartDetail = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();

  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  return (
    <section className={styles.cartDetail}>
      {cart.map((item) => (
        <article key={item.id} className={styles.cartContainer}>
          <article className={styles.cartDetailDesc}>
            <ul className={styles.listContainer}>
              <li>{item.name}</li>
              {item.description.map((c) => (
                <li key={c.id}>{c.support}</li>
              ))}

              <li> {item.price} $ </li>
            </ul>

            <div className={styles.btnContainer}>
              <button
                className={styles.btn}
                onClick={() => incrementHandler(item)}>
                +
              </button>
              <span> {item.quantity} </span>
              <button
                className = {` ${
                  item.quantity > 1 ? styles.btn : styles.removeBtn
                } `}
                onClick={() => decrementHandler(item)}>
                {item.quantity > 1 ? " - " : <FaTrash />  }
              </button>
            </div>
          </article>

          <div className={styles.imgContainer}>
            <img src={item.image} alt={item.name} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default CartDetail;
