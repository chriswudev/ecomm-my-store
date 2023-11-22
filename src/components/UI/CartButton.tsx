import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Icons } from '../Base';
import { RootState } from '../../redux/store';

const CartButton = () => {
  const { total_items } = useSelector((state: RootState) => state.cartState);
  return (
    <Wrapper>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? 'cart__container active' : 'cart__container'
        }
      >
        <div className="cart-icon">
          <Icons.FaShoppingCartStyled />
          <span>{total_items}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: var(--fs-500);
  }

  .cart__container {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0.3rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .active {
    border-color: var(--red-color-1);
  }

  .cart-icon {
    position: relative;
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -12px;
      right: -18px;
      padding: 0.2rem;
      min-width: 1.8rem;
      min-height: 1.6rem;
      background-color: var(--red-color-1);
      border-radius: 50%;
      color: var(--blue-color-3);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default CartButton;
