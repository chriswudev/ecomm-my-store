import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../../redux/actions/cart';

import { Button } from '../Base';
import { Product } from '../../types/products';

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton
      variant="primary"
      onClick={() => dispatch(addToCart(product))}
    >
      Add to cart
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  color: var(--green-color-1);
  &:hover {
    color: var(--white-color);
  }
`;

export default AddToCart;
