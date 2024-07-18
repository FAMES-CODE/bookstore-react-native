import { images } from '@/Data/images';
import { createContext } from 'react';

const CartContext = createContext({
	cart: [],
	addToCart: (p0: { quantity: any; id: number | null | undefined; image: keyof images; title: string; price: number; }) => {},
	removeFromCart: () => {},
	updateQuantity: (id: number | null | undefined, quantity: any) => {},
	clearCart: () => {},
});

export default CartContext;