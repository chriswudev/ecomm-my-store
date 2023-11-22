import { Product } from './products';

export type Sort = 'price-lowest' | 'price-highest' | 'name-a' | 'name-z';

export interface FilterState {
  filtered_products: Product[];
  all_products: Product[];
  sort: Sort;
  filters: {
    category: string;
  };
}
