import { Route, Routes } from 'react-router-dom';

import {
  ProductsPage,
  ProductDetailsPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
} from '../Pages';

const Main = () => {
  return (
    <Routes>
      <Route index element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Main;
