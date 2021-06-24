import styled from 'styled-components';

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

    img {
      transform: scale(1.05);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.67));

  flex-direction: column;
  position: absolute;
  height: 40%;
  width: 100%;
  bottom: 0;
  transition: 0.5s;
  padding: 10px;

  h2,
  a {
    margin: 0px;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    margin-top: auto;
    font-size: 20px;
    margin-bottom: 5px;
  }

  a {
    color: ${({ theme }) => theme.fontColor};
    font-size: 16px;
  }
`;

export const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.5s;
  cursor: pointer;
`;
