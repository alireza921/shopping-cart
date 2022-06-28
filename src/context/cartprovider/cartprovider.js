import { Children, createContext } from "react";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const CartProvider = ({children}) => {
    return (  
        <CartContext.Provider > 
            <CartContextDispatcher.Provider> 
                {Children}
            </CartContextDispatcher.Provider>
        </CartContext.Provider>
    );
}
 
export default CartProvider;