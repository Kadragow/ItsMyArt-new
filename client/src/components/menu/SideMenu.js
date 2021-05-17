import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Squash } from 'hamburger-react';
import routes from 'routes/routes';
import * as S from './SideMenu.sc';
import theme from 'styles/theme';
import { adminLinks, guestLinks, userLinks } from './menuItems';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { ROLE } from 'constants/constants';
import { useLocation } from 'react-router';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [links, setLinks] = useState(guestLinks);
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

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

  return (
    <S.MenuWrapper isExpanded={isExpanded}>
      <S.ArrowWrapper isExpanded={isExpanded}>
        <DoubleArrowIcon onClick={toggleIsExpanded} />
      </S.ArrowWrapper>
      <S.Title to={routes.home}>It's My Art!</S.Title>
      <S.LinksWrapper isOpen={isOpen}>{mappedLinks}</S.LinksWrapper>
      <Squash color={theme.secondary} toggled={isOpen} toggle={toggleIsOpen} />
    </S.MenuWrapper>
  );
};

export default SideMenu;
