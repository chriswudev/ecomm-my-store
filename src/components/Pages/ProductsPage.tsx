import styled from 'styled-components';
import { Screens } from '../../styles';
import { Products, Filters, Sort } from '../UI';

const ProductsPage = () => {
  return (
    <main>
      <Wrapper className="page">
        <Filters />
        <div>
          <Sort />
          <Products />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  ${Screens.lg`
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: 220px 1fr;
  `}
`;

export default ProductsPage;
