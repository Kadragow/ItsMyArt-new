import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Squash } from 'hamburger-react';
import routes from 'routes/routes';
import * as S from './SideMenu.sc';
import theme from 'styles/theme';
import { adminLinks, guestLinks, userLinks } from './menuItems';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { ROLE } from 'constants/constants';
import { useLocation } from 'react-router';
import useAuth from 'auth/useAuth';
import { Link } from 'react-router-dom';
import SimpleModal from 'components/shared/SimpleModal';
import PostCreator from 'components/posts/PostCreator';

const SideMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [links, setLinks] = useState(guestLinks);
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { logout, getCurrentUser } = useAuth();

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const toggleIsExpanded = () => setIsExpanded((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const onLogout = () => {
    toggleIsOpen();
    logout();
  };

  const onAddPost = () => {
    toggleModal();
  };

  const menuButton = (label, icon, action) => (
    <S.NavButton isExpanded={isExpanded} onClick={action}>
      {icon}
      <span>{label}</span>
    </S.NavButton>
  );

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
        <S.CurrentUser isExpanded={isExpanded}>
          <p>Logged as</p>
          <Link to="/user">{user?.nickname}</Link>
        </S.CurrentUser>
      )}
      <S.LinksWrapper isOpen={isOpen} isLogged={user}>
        {user && menuButton('Add post', <AddBoxIcon />, onAddPost)}
        {mappedLinks}
        {user && menuButton('Logout', <PowerSettingsNewIcon />, onLogout)}
      </S.LinksWrapper>
      <Squash color={theme.secondary} toggled={isOpen} toggle={toggleIsOpen} />

      <SimpleModal open={isModalOpen} onClose={toggleModal}>
        <PostCreator toggleModal={toggleModal} />
      </SimpleModal>
    </S.MenuWrapper>
  );
};

export default SideMenu;
