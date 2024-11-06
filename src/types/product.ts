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
export interface Rating {
  rate: number;
  count: number;
}

export interface Params {
  product: number;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Data) => void;
  removeCart: (id: number) => void;
  removeToList: (id: number) => void;
  clearCart: () => void;
}
