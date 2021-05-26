import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { device } from 'styles/devices';

export const MenuWrapper = styled.nav`
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid ${({ theme }) => theme.secondary};
  box-shadow: 0 0px 14px ${({ theme }) => theme.primary},
    0 0px 20px ${({ theme }) => theme.secondary};

  width: 100%;
  min-height: 15vh;
  padding: 25px;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.3s;

  @media ${device.tablet} {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    border-bottom: none;
    border-right: 3px solid ${({ theme }) => theme.secondary};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: ${({ isExpanded }) => (isExpanded ? '300px' : '80px')};
    min-width: ${({ isExpanded }) => (isExpanded ? '300px' : '80px')};
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
`;

export const LinksWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 25px;

  z-index: 1;
  position: absolute;
  height: 90vh;
  top: 15vh;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  background-color: ${({ theme }) => theme.primary};
  transition: 0.3s;

  @media ${device.tablet} {
    padding: 0px;
    height: auto;
    position: relative;
    right: 0;
    justify-content: center;
    margin: auto auto 50vh auto;
  }
`;

const sharedNavItemStyle = css`
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
    cursor: pointer;

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

const activeClassName = 'nav-item-active';
export const NavLinks = styled(NavLink).attrs({ activeClassName })`
  ${sharedNavItemStyle};

  &.${activeClassName} {
    ::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

export const NavButton = styled.button`
  ${sharedNavItemStyle};
  background-color: transparent;
  border: none;
  padding: 0;
`;
