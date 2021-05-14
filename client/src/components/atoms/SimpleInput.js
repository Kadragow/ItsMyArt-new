import React from 'react';
import styled from 'styled-components';

const InputLabel = styled.label`
  z-index: -1;
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  line-height: 147.6%;
  color: ${({ theme }) => theme.fontColor};
  transition: 0.2s;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 0.15rem solid
    ${({ theme, error }) => (error ? 'red' : theme.secondary)};
  font-size: 1.2rem;
  padding: 0.5rem;
  padding-bottom: 0.1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.fontColor};
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0.75rem 0.5rem -0.5rem ${({ theme, error }) => (error ? 'red' : theme.secondary)};
  }
`;

const InputWrapper = styled.div`
  z-index: 1;
  margin: auto auto 1.5rem auto;
  position: relative;
  width: 100%;

  ${StyledInput}:focus + ${InputLabel}, 
  ${StyledInput}:not([value=""]) + ${InputLabel} {
    top: -0.25rem;
    font-size: 0.8rem;
  }
`;

const SimpleInput = ({ label, type,...rest }) => {
  return (
    <InputWrapper>
      <StyledInput type={type} {...rest} />
      <InputLabel>{label}</InputLabel>
    </InputWrapper>
  );
};

export default SimpleInput;
