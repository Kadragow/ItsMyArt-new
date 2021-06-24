import styled, { css } from 'styled-components';
import { device } from 'styles/devices';

export const Wrapper = styled.div`
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

export const PostImage = styled.img`
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

export const PostImagePlaceholder = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  max-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.secondary};

  > div {
    width: 90%;
    height: 50vh;
    max-height: 90%;
    border: 2px dashed;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.tablet} {
    width: 70%;
    max-height: 100%;
  }
`;

const sideInfoCss = css`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  border-top: 1px solid ${({ theme }) => theme.secondaryDark};

  h1,
  h2,
  p,
  input,
  textarea {
    padding-left: 10px;
    background-color: ${({ theme }) => theme.primaryLight};
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
    max-width: 30%;
    height: 100%;

    padding: 25px;
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.secondaryDark};
  }
`;

export const PostInfo = styled.div`
  ${sideInfoCss}
`;

export const PostInfoForm = styled.form`
  ${sideInfoCss}

  input {
    color: ${({ theme }) => theme.fontColor};
    border-top: none;
    padding-bottom: 10px;
    font-size: 24px;
  }

  textarea {
    color: ${({ theme }) => theme.fontColor};
    font-size: 16px;
    margin-top: 20px;
    padding: 10px;
    resize: vertical;
  }
`;
