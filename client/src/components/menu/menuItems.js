import routes from 'routes/routes';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

export const guestLinks = [
  {
    to: routes.login,
    label: 'Login',
    icon: <VpnKeyIcon />,
    fancy: true,
  },
  {
    to: routes.register,
    label: 'Register',
    icon: <LibraryBooksIcon />,
    fancy: true,
  },
];

export const userLinks = [
  {
    to: routes.user.home,
    label: 'My profile',
    icon: <HomeIcon />,
  },
  {
    to: routes.user.settings,
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];

export const adminLinks = [
  {
    to: routes.admin.home,
    label: 'My profile',
    icon: <HomeIcon />,
  },
  {
    to: routes.admin.administration,
    label: 'Administration',
    icon: <ViewQuiltIcon />,
  },
  {
    to: routes.admin.settings,
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];
