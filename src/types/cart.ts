export interface Cart {
  id: number;
  price: number;
  image: string;
  title: string;
  amount: number;
}

export interface CartState {
  cart: Cart[];
  total_price: number;
  total_items: number;
}
