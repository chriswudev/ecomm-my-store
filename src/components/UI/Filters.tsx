import styled from 'styled-components';

import { getUniqueValues } from '../../utils/helpers';

import { Typography } from '../Base';

import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../redux/actions/filter';
import { RootState } from '../../redux/store';

const Filters = () => {
  const dispatch = useDispatch();
  const {
    filters: { category },
    all_products,
  } = useSelector((state: RootState) => state.filterState);

  const categories = getUniqueValues(all_products, 'category');

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      name,
      dataset: { category },
    } = e.target as HTMLButtonElement;
    if (category) {
      dispatch(updateFilters(name, category));
    }
  };

  if (all_products.length > 0) {
    return (
      <Wrapper>
        <div className="content">
          <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__control">
              <Typography.H4>Categories</Typography.H4>
              <div className="form__categories">
                {categories.map((c, index) => (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    className={category === c ? 'active' : undefined}
                    onClick={handleCategoryClick}
                    data-category={c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    );
  }
  return <div></div>;
};

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .content {
    position: sticky;
    top: 7rem;
  }

  .filter__form {
    display: grid;
    gap: 2rem;
  }

  .form__control > *:not(:first-child) {
    margin-top: 1rem;
  }

  .form__categories {
    display: grid;
    justify-items: flex-start;
    gap: 1rem;

    button {
      color: var(--orange-color-1);
      font-size: var(--fs-500);
      padding-right: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 0.3rem solid transparent;
      &:hover {
        padding-left: 0.5rem;
      }
    }

    .active {
      border-bottom-color: var(--gray-color-1);
      padding-left: 0.5rem;
    }
  }
`;

export default Filters;
