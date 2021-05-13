import styled from 'styled-components';

export const SimpleButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 6px 12px;
  border: 2px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  background-color: transparent;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.4rem ${({ theme }) => theme.secondary},
      inset 0 0 0.2rem ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;
