import React from 'react';
import styled from 'styled-components';
import { device } from 'styles/devices';

const Wrapper = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};

  @media ${device.tablet} {
    flex-direction: row;
    height: 80%;
  }
`;

const PostImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  max-height: 70%;

  object-fit: contain;

  @media ${device.tablet} {
    width: 70%;
    max-height: 100%;
  }
`;

const PostInfo = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  border-top: 1px solid ${({ theme }) => theme.secondaryDark};

  * {
    padding-left: 10px;
    /* background-color: ${({ theme }) => theme.primary}; */
    border: 1px solid ${({ theme }) => theme.secondaryDark};
    border-left: 7px solid ${({ theme }) => theme.secondary};
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 1rem;
    font-style: italic;
    padding-top: 10px;
    border-bottom: none;
  }

  h2 {
    border-top: none;
    padding-bottom: 10px;
  }

  p {
    padding: 10px;
  }

  @media ${device.tablet} {
    width: 30%;
    height: 100%;

    padding: 25px;
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.secondaryDark};
  }
`;

const SinglePost = ({ file, title, user, description }) => {
  return (
    <Wrapper>
      <PostImage src={file} />
      <PostInfo>
        <h1>{user?.nickname}</h1>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </PostInfo>
    </Wrapper>
  );
};

export default SinglePost;
