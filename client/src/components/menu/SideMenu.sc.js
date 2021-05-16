import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styles/devices';

export const MenuWrapper = styled.nav`
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 15vh;
  padding: 25px;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.3s;

  @media ${device.tablet} {
  position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    height: 100vh;
    width: ${({ isExpanded }) => (isExpanded ? '300px' : '80px')};
    padding: 10px;

    .hamburger-react {
      display: none;
    }
  }
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: none;
  justify-content: end;
  align-items: center;
  margin-bottom: 5vh;
  z-index: 2;

  > svg {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
    transform: ${({ isExpanded }) => isExpanded && 'rotateY(180deg)'};
    &:hover {
      cursor: pointer;
      transform: ${({ isExpanded }) => isExpanded && 'rotateY(180deg)'}
        scale(1.2);
    }
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  text-shadow: 0 0 5px ${({ theme }) => theme.secondary};

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

export const LinksWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 25px;

  position: absolute;
  height: 90vh;
  background-color: ${({ theme }) => theme.primary};
  top: 15vh;
  z-index: 1;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  transition: 0.3s;

  @media ${device.tablet} {
    padding: 0px;
    height: auto;
    position: relative;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const activeClassName = 'nav-item-active';
export const NavLinks = styled(NavLink).attrs({ activeClassName })`
  position: relative;

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;

  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 20px auto;
  color: ${({ theme }) => theme.secondary};

  svg {
    width: 40px;
    height: 40px;
    margin: auto 10px auto 0px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 5px;
    transition: 0.3s;
  }

  &.${activeClassName} {
    ::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.secondary};
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover {
    ::before {
      left: 0;
      right: auto;
      width: 100%;
    }

    svg {
      color: ${({ theme }) => theme.secondaryDark};
      box-shadow: 0 0 5px ${({ theme }) => theme.secondary};
    }
  }

  @media ${device.tablet} {
    svg {
      margin: ${({ isExpanded }) => !isExpanded && 'auto'};
    }

    span {
      display: ${({ isExpanded }) => !isExpanded && 'none'};
    }
  }
`;
