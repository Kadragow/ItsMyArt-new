const routes = {
  home: '/',

  login: '/auth/login',
  register: '/auth/register',

  user: {
    home: '/user',
    settings: '/user/settings',
  },

  admin: {
    home: '/admin',
    settings: '/admin/settings',
    administration: '/admin/administration',
  },
};

export default routes;
