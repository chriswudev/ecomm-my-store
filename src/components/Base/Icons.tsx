import styled, { css } from 'styled-components';

import {
  FaStore,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
} from 'react-icons/fa';

const bigIcon = css`
  font-size: 2.5rem;
`;

const mediumIcon = css`
  font-size: 2rem;
`;

const FaPlusStyled = styled(FaPlus)`
  ${mediumIcon}
  color: var(--green-color-1);
`;

const FaTrashStyled = styled(FaTrash)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaMinusStyled = styled(FaMinus)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaStoreStyled = styled(FaStore)`
  ${bigIcon}
  color: var(--orange-color-1);
`;

const FaShoppingCartStyled = styled(FaShoppingCart)`
  ${mediumIcon}
  color: var(--orange-color-1);
`;

const Icons = {
  FaStoreStyled,
  FaShoppingCartStyled,
  FaPlusStyled,
  FaMinusStyled,
  FaTrashStyled,
};

export default Icons;
