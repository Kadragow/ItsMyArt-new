import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import routes from 'routes/routes';
import GlobalStyle from 'styles/GlobalStyle';

import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
