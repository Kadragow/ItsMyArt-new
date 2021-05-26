import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { ROLE } from 'constants/constants';
import routes from 'routes/routes';

const AdminRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth?.isAuthenticated !== true ? (
          <Redirect
            to={{ pathname: routes.login, state: { from: props.location } }}
          />
        ) : auth?.user?.role?.name !== ROLE.admin ? (
          <Redirect
            to={{ pathname: routes.home, state: { from: props.location } }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default AdminRoute;
