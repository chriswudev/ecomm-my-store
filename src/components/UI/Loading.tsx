import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

interface WrapperProps {
  lazy?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - (var(--header-height)) - 20rem);

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--red-color-1);
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading;
