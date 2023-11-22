export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  price: number;
  image: string;
  category: string;
  title: string;
  description: string;
  rating: Rating;
}

export interface ProductsState {
  products_loading: boolean;
  products_error: boolean;
  products: Product[];
  popular_products: Product[];
}
