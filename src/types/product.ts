export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface CartItem extends Data {
  quantity: number;
}
interface Rating {
  rate: number;
  count: number;
}

export interface Params {
  product: number;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Data) => void;
  // removeFromCart: (id: number) => void;
  // updateQuantity: (id: number, quantity: number) => void;
  // clearCart: () => void;
  // totalItems: () => number;
  // totalPrice: () => number;
}
