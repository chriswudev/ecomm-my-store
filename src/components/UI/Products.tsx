import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Loading, Error, ProductList } from '.';
import { Typography } from '../Base';

import {
  filterProducts,
  loadProducts,
  sortProducts,
} from '../../redux/actions/filter';
import { RootState } from '../../redux/store';

const Products = () => {
  const dispatch = useDispatch();
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useSelector((state: RootState) => state.productsState);

  const { filtered_products, sort, filters } = useSelector(
    (state: RootState) => state.filterState
  );

  useEffect(() => {
    dispatch(loadProducts(products));
  }, [products, dispatch]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
  }, [filters, sort, dispatch]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (filtered_products.length < 1) {
    return (
      <Typography.H4>Sorry, no products matched your search...</Typography.H4>
    );
  }

  return <ProductList products={filtered_products} />;
};

export default Products;
