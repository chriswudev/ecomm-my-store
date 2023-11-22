import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Screens } from '../../styles';
import { Typography } from '../Base';
import { updateSort } from '../../redux/actions/filter';
import { RootState } from '../../redux/store';

const Sort = () => {
  const { filtered_products: products, sort } = useSelector(
    (state: RootState) => state.filterState
  );

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="sort__btns"></div>
      <Typography.P className="sort__items">
        <span>{products.length}</span> items found
      </Typography.P>
      <div className="sort__line" />
      <form className="sort__form">
        <label htmlFor="sort">sort by :</label>
        <select
          name="sort"
          id="sort"
          className="sort__input"
          value={sort}
          onChange={(e) => dispatch(updateSort(e.target.value))}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  ${Screens.sm`
    gap:0 1rem;
  `}

  .sort__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      margin-right: 0.3rem;
      display: inline-block;
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      ${Screens.md`
        padding: 0.5rem;
      `}
    }
  }

  .sort__items {
    font-size: 1.3rem;
    span {
      display: inline-block;
      min-width: 2rem;
      text-align: center;
      color: var(--orange-color-1);
    }
  }

  .sort__line {
    background-color: var(--orange-color-1);
    height: 0.3rem;
    width: 30%;
    display: none;
    margin-inline: auto;

    ${Screens.lg`
      display: inline-block;
    `}
    ${Screens.xl`
      width:40%;
    `}
  }

  .sort__form {
    margin-left: auto;
    label {
      color: var(--orange-color-1);
      margin-right: 0.2rem;
      font-size: var(--fs-400);
    }
    option {
      font-size: var(--fs-600);
      padding: 1rem;
      background: var(--bg-color);
    }
  }

  .active {
    border: 0.2rem solid var(--green-color-1);
    border-radius: 0.3rem;
  }
`;

export default Sort;
