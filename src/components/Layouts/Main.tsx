import { Route, Routes } from 'react-router-dom';

import { ProductsPage, CartPage, ErrorPage } from '../Pages';

const Main = () => {
  return (
    <Routes>
      <Route index element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Main;
