import styled from 'styled-components';

import { AddToCart } from '.';
import { Screens } from '../../styles';
import { Typography } from '../Base';
import { Product } from '../../types/products';

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { title, id, image, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={title} />
            <Typography.H3 title={title} className="ellipsis">
              {title}
            </Typography.H3>
            <Typography.P title={description} className="ellipsis-2-lines">
              {description}
            </Typography.P>
            <div>
              <p>${price}</p>
              <AddToCart product={product} />
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  justify-content: center;
  grid-template-columns: 1fr 1fr;

  ${Screens.xl`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  article {
    padding: 1rem;
    background: var(--white-color);
    border-radius: var(--radius);
    transition: var(--transition);
    min-height: 35rem;
    max-width: 20rem;

    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }
    h3 {
      margin: 1rem 0;
      min-height: 2.4rem;
    }
    img {
      max-height: 25rem;
      object-fit: contain;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 1.8rem;
        color: var(--red-color-1);
      }
    }
    & > p {
      margin-bottom: 2rem;
    }
  }
`;

export default ProductList;
