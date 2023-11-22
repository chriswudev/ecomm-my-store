import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  a {
    display: inline-block;
  }

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          border: 0.2rem solid var(--green-color-1);
          a {
            padding: 0.5rem 1rem;
          }
          &:hover {
            background: var(--green-color-1);
            a {
              color: var(--white-color);
            }
          }
        `;

      case 'secondary':
        return css`
          border: 0.2rem solid var(--red-color-1);
          color: var(--gray-color-1);
          a {
            padding: 0.5rem 1rem;
            color: var(--gray-color-1);
          }
          &:hover {
            background: var(--red-color-1);
            color: var(--white-color);
            a {
              color: var(--white-color);
            }
          }
        `;

      default:
        break;
    }
  }}
`;

export default Button;
