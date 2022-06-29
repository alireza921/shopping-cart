export const checkInCart = (product, cart) => {
  const check = cart.find((c) => c.id === product.id);
  return check;
};
