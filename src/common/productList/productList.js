import { products } from "../../data/DataBase";
import styles from "./productlist.module.css";
const ProductList = () => {
  const addToCartHandler = (product) => {
    console.log(product);
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
                  Add to cart
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
