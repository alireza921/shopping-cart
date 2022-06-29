import CartDetail from "../common/cartDetail/CartDetail";

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
      <section > cart summery </section>
      <CartDetail />
    </>
  );
};
