import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Squash } from 'hamburger-react';
import routes from 'routes/routes';
import * as S from './SideMenu.sc';
import theme from 'styles/theme';
import { adminLinks, guestLinks, userLinks } from './menuItems';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { ROLE } from 'constants/constants';
import { useLocation } from 'react-router';
import useAuth from 'auth/useAuth';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [links, setLinks] = useState(guestLinks);
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { logout, getCurrentUser } = useAuth();

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

  const onLogout = () => {
    toggleIsOpen();
    logout();
  };

  const mappedLinks = links.map((el) => (
    <S.NavLinks
      key={el.to}
      to={el.to}
      isExpanded={isExpanded}
      isActive={() => pathname === el.to}
      onClick={toggleIsOpen}
    >
      {el.icon}
      <span>{el.label}</span>
    </S.NavLinks>
  ));

  useEffect(() => {
    if (!user) setLinks(guestLinks);
    if (user?.role?.name === ROLE.user) setLinks(userLinks);
    if (user?.role?.name === ROLE.admin) setLinks(adminLinks);
  }, [user]);

  useEffect(() => {
    getCurrentUser();
  }, [pathname]);

  return (
    <S.MenuWrapper isExpanded={isExpanded}>
      <S.ArrowWrapper isExpanded={isExpanded}>
        <DoubleArrowIcon onClick={toggleIsExpanded} />
      </S.ArrowWrapper>
      <S.Title to={routes.home}>It's My Art!</S.Title>
      {user && (
        <S.CurrentUser>
          <p>Logged as</p>
          <h2>{isExpanded ? user?.nickname : `${user?.nickname?.slice(0, 1)}...${user?.nickname?.slice(-1)}`}</h2>
        </S.CurrentUser>
      )}
      <S.LinksWrapper isOpen={isOpen}>
        {mappedLinks}
        {user && (
          <S.NavButton isExpanded={isExpanded} onClick={onLogout}>
            <PowerSettingsNewIcon />
            <span>Logout</span>
          </S.NavButton>
        )}
      </S.LinksWrapper>
      <Squash color={theme.secondary} toggled={isOpen} toggle={toggleIsOpen} />
    </S.MenuWrapper>
  );
};

export default SideMenu;
