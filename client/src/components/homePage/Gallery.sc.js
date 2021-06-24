import styled from 'styled-components';
import { device } from 'styles/devices';

export const GalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-top: 7.5vh;

  @media ${device.tablet} {
    padding-top: 1.5rem;
  }
`;

export const GallertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  margin: 0;
  padding: 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
`;

export const IndicatorWrapper = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;
