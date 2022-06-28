import { useCart } from "../../context/cartprovider/cartprovider";

const CartPage = () => {
  const cart = useCart();
  console.log(cart);
  return <div>Cart Page</div>;
};

export default CartPage;
