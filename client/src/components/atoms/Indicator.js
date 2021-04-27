import React from 'react';
import styled from 'styled-components';
import { RingLoader } from 'halogenium';
import theme from '../../styles/theme';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.primary};
  opacity: 0.8;
  z-index: 99999999;
`;

const Indicator = () => (
  <Wrapper>
    <RingLoader color={theme.secondary} />
  </Wrapper>
);

export default Indicator;
