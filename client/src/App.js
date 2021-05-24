import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import routes from 'routes/routes';
import GlobalStyle from 'styles/GlobalStyle';

import HomePage from 'pages/HomePage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import SideMenu from 'components/menu/SideMenu';
import { device } from 'styles/devices';
import useAuth from 'auth/useAuth';

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
          </Switch>
        </Router>
      </ThemeProvider>
    </AppWrapper>
  );
};

export default App;
