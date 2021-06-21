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
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
  /* border-top: 2px solid ${({ theme }) => theme.secondary}; */
  border-top: 2px solid transparent;
  border-image: linear-gradient(
    to left,
    transparent,
    ${({ theme }) => theme.secondary}
  );
  border-image-slice: 1;

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
    border-top: none;
    border-right: 2px solid transparent;
    border-image: linear-gradient(
      to top,
      transparent,
      ${({ theme }) => theme.secondary}
    );
    border-image-slice: 1;
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

export const CurrentUser = styled.div`
  margin: auto auto 1vh auto;
  display: flex;
  flex-direction: column;

  h2,
  p {
    margin: 0;
  }

  p {
    font-size: 0.6em;
  }

  h2 {
    font-size: 2em;
    color: ${({ theme }) => theme.secondary};
    text-align: center;
  }

  @media ${device.tablet} {
    width: 100%;
    display: flex;
  }
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
    top: auto;
    justify-content: center;
    margin: auto auto 40vh auto;
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
