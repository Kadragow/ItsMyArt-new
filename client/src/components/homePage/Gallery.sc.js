import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const GallertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  margin: 0;
  padding: 0;
`;

export const PostWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > div {
    transform: translateY(200%);
  }

  &:hover {
    > div {
      transform: translateY(0%);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primaryLight};
  flex-direction: column;
  position: absolute;
  height: 40%;
  width: 100%;
  bottom: 0;
  transition: 0.5s;
  padding: 10px;

  h2,
  a {
    color: ${({ theme }) => theme.fontColor};
    margin: 0px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  a {
    font-size: 16px;
  }
`;

export const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IndicatorWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;
