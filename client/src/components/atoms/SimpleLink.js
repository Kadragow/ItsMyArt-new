import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SimpleLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;
