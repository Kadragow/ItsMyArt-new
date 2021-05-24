import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { ROLE } from 'constants/constants';
import routes from 'routes/routes';

const AdminRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  return (
    <Route {...rest}>
      {auth?.isAuthenticated !== true ? (
        <Redirect to={{ pathname: routes.login, state: { from: location } }} />
      ) : auth?.user?.role?.name !== ROLE.admin ? (
        <Redirect to={{ pathname: routes.home, state: { from: location } }} />
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default AdminRoute;
