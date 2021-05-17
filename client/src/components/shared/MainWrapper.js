import styled, { css } from 'styled-components';
import { device } from 'styles/devices';

const MainWrapper = styled.main`
  padding: 15vh 5px 5px 5px;
  min-height: 100vh;
  width: 100%;
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media ${device.tablet} {
    padding: 20px;
  }
`;

export default MainWrapper;
