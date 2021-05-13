import styled, { css } from 'styled-components';

const MainWrapper = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export default MainWrapper;
