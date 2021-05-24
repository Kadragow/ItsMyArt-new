import styled, { css } from 'styled-components';
import { device } from 'styles/devices';

const MainWrapper = styled.main`
  padding: 15vh 5px 5px 5px;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
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
