import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Screens } from '../../styles';
import { CartButton } from '../UI';
import { Icons, Typography } from '../Base';

const Navbar = () => {
  return (
    <Header>
      <div className="header-center">
        <Link to="/">
          <Icons.FaStoreStyled />
        </Link>
        <Typography.H3>EComm My Store</Typography.H3>
        <div className="header__cart">
          <CartButton />
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  box-shadow: 0 0 5rem 0.5rem var(--bg-color);
  position: fixed;
  background: var(--orange-color-2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .header-center {
    width: min(100%, var(--max-width));
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__cart {
    display: none;
    ${Screens.md`
      display:inline-block;
    `}
  }
`;

export default Navbar;
