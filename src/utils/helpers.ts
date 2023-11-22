import { Product } from '../types/products';

export const getUniqueValues = (data: Product[], type: 'category') => {
  const unique = data.map((item) => item[type]);
  return ['all', ...Array.from(new Set(unique))];
};
