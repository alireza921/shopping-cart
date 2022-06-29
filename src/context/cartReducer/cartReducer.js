const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        // console.log(updatedItem);
        updatedItem.quantity++;
        updatedCart[updatedCartIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (p) => p.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedCartIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart =updatedCart.filter((p) => p.id !== action.payload.id);
        // updatedCart[updatedCartIndex] = filteredItem;
        return {...state , cart : filteredCart }
      } else { 
        updatedItem.quantity-- ;
        updatedCart[updatedCartIndex] = updatedItem; 
        return {...state , cart : updatedCart}
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
