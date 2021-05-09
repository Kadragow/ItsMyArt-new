import React from 'react';
import styled from 'styled-components';
import { OutlinedInput } from '@material-ui/core';

const StyledInput = styled(OutlinedInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryLight};

  .MuiOutlinedInput-colorSecondary {
    background-color: ${({ theme }) => theme.secondary};
  }

  .MuiInputBase-input {
    color: ${({ theme }) => theme.fontColor} !important;
  }
`;

const SimpleInput = (props) => {
  return <StyledInput {...props} />;
};

export default SimpleInput;
