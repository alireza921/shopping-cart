import { Link } from "react-router-dom";
import AuhtComponent from "../../components/auth component/authComponent";
import { useAuth } from "../../context/auth/authProvider";
import { useCart } from "../../context/cartprovider/cartprovider";
import styles from "./checkout.module.css";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();
  const redirect = "/login?redirect=/checkout";

  return (
    <>
      <section className={styles.checkoutHolder}>
        {auth ? (
          <>
            <AuhtComponent title={"Billing Detail"} />
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
          </>
        ) : (
          <div style={{ margin: "1rem auto" }}>
            <Link to={redirect}> Please Log In First </Link>
          </div>
        )}
      </section>
      <>
        <button className={styles.btn}> Register Order </button>
      </>
    </>
  );
};

export default Checkout;
