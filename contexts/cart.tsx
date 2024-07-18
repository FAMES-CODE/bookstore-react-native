import { createContext } from 'react';

const CartContext = createContext({
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
	clearCart: () => {},
});

export default CartContext;