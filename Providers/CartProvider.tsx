import CartContext from "@/contexts/cart";
import { useReducer } from "react";

function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item: any) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      throw new Error();
  }
}

export default function CartProvider({ children }: any) {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart: (item: any) => dispatch({ type: "ADD_TO_CART", payload: item }),
        removeFromCart: (item: any) => dispatch({ type: "REMOVE_FROM_CART", payload: item }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
