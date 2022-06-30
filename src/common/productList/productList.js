import {
  useCart,
  useCartAction,
} from "../../context/cartprovider/cartprovider";
import { products } from "../../data/DataBase";
import styles from "./productlist.module.css";
import { checkInCart } from "../../utils/check-in-cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const dispatch = useCartAction();
  const { cart } = useCart();
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    if (!checkInCart(product, cart)) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      // toast.success("added to cart")
    } else {
      navigate("/cart");
    }

  };
  return (
    <>
      <h2>Product List</h2>
      <section className={styles.productList}>
        <div className={styles.productListHolder}>
          {products.map((product) => (
            <section key={product.id} className={styles.productListContainer}>
              <div className={styles.imgContainer}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productDesc}>
                <span> {product.name} </span>
                <span> $ {product.price} </span>
                <button
                  className={styles.btn}
                  onClick={() => addToCartHandler(product)}>
                  {checkInCart(product, cart) ? "go to store" : "Add to Cart"}
                </button>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductList;
