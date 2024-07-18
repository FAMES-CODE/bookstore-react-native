import CartContext from "@/contexts/cart";
import { useReducer } from "react";

function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item: any) => item.id !== action.payload.id);
    case "UPDATE_QUANTITY":
      return state.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      })  
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
        removeFromCart: (id: any) => dispatch({ type: "REMOVE_FROM_CART", payload: {id} }),
        updateQuantity: (id: any, quantity: any) => dispatch({ type: "UPDATE_QUANTITY", payload: {id, quantity} }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
