import styled from 'styled-components';

import { Screens } from '../../styles';

import { AmountButtons } from '../UI';
import { Icons, Typography } from '../Base';

import { useDispatch } from 'react-redux';
import { removeFromCart, toggleAmount } from '../../redux/actions/cart';
import { Cart } from '../../types/cart';

const CartItem = ({ title, price, amount, id, image }: Cart) => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(toggleAmount(id, 'inc'));
  };
  const decrease = () => {
    dispatch(toggleAmount(id, 'dec'));
  };

  return (
    <Wrapper>
      <div className="item__img">
        <img src={image} alt={title} />
      </div>
      <div className="item__info">
        <Typography.P title={title}>{title}</Typography.P>
        <Typography.P>
          ${price} &#9747; {amount} :
          <br />
          <span>${(price * amount).toFixed(2)}</span>
        </Typography.P>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <button
        className="item__delete"
        onClick={() => dispatch(removeFromCart(id))}
      >
        <Icons.FaTrashStyled />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 0.5rem;
  background: var(--white-color);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  ${Screens.sm`
    gap: 2rem;
  `}
  ${Screens.md`
    gap: 3rem;
  `}

  .item__img {
    display: none;
    ${Screens.md`
      display: inline;
    `}
    img {
      max-width: 8rem;
    }
  }

  .item__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    span {
      color: var(--red-color-1);
    }

    a {
      font-size: var(--fs-400);
    }
  }

  .item__delete {
    padding: 0.6rem;
    transition: var(--transition);
    transform: scale(1);
  }
`;

export default CartItem;
