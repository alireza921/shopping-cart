import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authProvider";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const { cart, total } = useCart();

  return (
    <>
    <section className={styles.checkoutHolder}>
      <section className={styles.checkoutAuth}>
        <h2> Billing details </h2>
        {auth ? (
          <main className={styles.authContainer}>
            <ul className={styles.listContainer}>
              <li> {auth.name}</li>
              <li> {auth.email}</li>
              <li> {auth.phoneNumber}</li>
            </ul>
          </main>
        ) : (
          <Link to='/login?redirect=/checkout'> please Log in First</Link>
        )}
      </section>

      <section className={styles.checkoutSummeryHolder}>
        <div>
          {cart.length ? (
            <>
              <h2> Your shopping cart </h2>
              <div className={styles.checkoutSummeryTitle}>
                <p> product </p>
                <p> singular plural </p>
              </div>

              <main>
                {cart.map((c) => (
                  <ul className={styles.checkoutSummeryList}>
                    <li>
                      name : {c.name} * {c.quantity}{" "}
                    </li>
                    <li> price : {c.price} $</li>
                  </ul>
                ))}
              </main>
              <footer className={styles.checkoutSummeryTotal}>
                <h2> Total Price : </h2>
                <h2> {total} $ </h2>
              </footer>
            </>
          ) : (
            <div>
              <span>your cart is empty</span>
              <h2>
                <Link to='/'> go to shopping </Link>
              </h2>
            </div>
          )}
        </div>
      </section>
    </section>
      <>
        {auth && cart.length && (
          <>
            <button className={styles.btn}> Register Order </button>
          </>
        )}
      </>
    </>
  );
};

export default Checkout;
