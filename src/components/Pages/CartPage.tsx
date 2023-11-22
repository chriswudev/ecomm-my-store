import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/actions/cart';
import { Screens } from '../../styles';
import { CartTotal, CartItem, EmptyCart } from '../UI';
import { Button } from '../Base';
import { RootState } from '../../redux/store';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cartState);

  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <main>
      <Wrapper className="page">
        <div className="cart-content">
          <div className="cart__items">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__links">
            <Button variant="primary">
              <Link to="/products">Buy more</Link>
            </Button>
            <Button
              variant="secondary"
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </Button>
          </div>
        </div>
        <CartTotal />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  ${Screens.lg`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  .cart-content {
    display: grid;
    gap: 1rem;
    ${Screens.lg`
      grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .clear-btn {
    padding: 0.5rem 1rem;
  }
`;

export default CartPage;
