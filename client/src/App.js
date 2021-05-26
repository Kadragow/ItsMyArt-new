import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import { device } from 'styles/devices';

import useAuth from 'auth/useAuth';
import routes from 'routes/routes';
import AdminRoute from 'auth/AdminRoute';
import UserRoute from 'auth/UserRoute';
import GlobalStyle from 'styles/GlobalStyle';

import SideMenu from 'components/menu/SideMenu';

import HomePage from 'pages/HomePage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import AdminHome from 'pages/admin/AdminHome';
import AdminAdministration from 'pages/admin/AdminAdministration';
import AdminSettings from 'pages/admin/AdminSettings';
import UserHome from 'pages/user/UserHome';
import UserSettings from 'pages/user/UserSettings';

const AppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: visible;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const App = () => {
  const { getCurrentUser } = useAuth();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <SideMenu />
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.login} component={Login} />
            <Route exact path={routes.register} component={Register} />

            <AdminRoute exact path={routes.admin.home} component={AdminHome} />
            <AdminRoute
              exact
              path={routes.admin.administration}
              component={AdminAdministration}
            />
            <AdminRoute
              exact
              path={routes.admin.settings}
              component={AdminSettings}
            />

            <UserRoute exact path={routes.user.home} component={UserHome} />
            <UserRoute
              exact
              path={routes.user.settings}
              component={UserSettings}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppWrapper>
  );
};

export default App;
