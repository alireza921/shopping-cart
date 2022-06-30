import CartDetail from "../common/cartDetail/CartDetail";
import CartSummery from "../common/cartSummery/cartSummery";

export const renderCart = (cart) => {
  if (!cart.length) {
    return (
      <div>
        <h2> cart is empty </h2>
      </div>
    );
  }
  
  return (
    <>
      <CartSummery /> 
      <CartDetail />
    </>
  );
};
