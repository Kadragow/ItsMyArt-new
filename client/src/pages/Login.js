import useAuth from 'auth/useAuth';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import MainWrapper from 'components/shared/MainWrapper';
import SimpleForm from 'components/shared/SimpleForm';
import routes from 'routes/routes';
import { SimpleLink } from 'components/atoms/SimpleLink';
import { useSelector } from 'react-redux';

const inputs = [
  {
    name: 'email',
    label: 'E-mail',
    rules: { required: true },
  },
  {
    name: 'password',
    label: 'Password',
    rules: { required: true },
    type: 'password',
  },
];

const Login = () => {
  const [error, setError] = useState();
  const { login } = useAuth();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const resetError = () => setError(null);

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result === 'success') return <Redirect to={history.location.state?.from || '/'} />;

    if (result?.data) setError(result.data);
  };

  const helpText = (
    <span>
      Don't have an account?{' '}
      <SimpleLink to={routes.register}>Register right now!</SimpleLink>
    </span>
  );

  if (isAuthenticated)
    return <Redirect to={history.location.state?.from || '/'} />;

  return (
    <MainWrapper center>
      <SimpleForm
        submitLabel="Log me in!"
        inputs={inputs}
        onSubmit={onSubmit}
        error={error}
        resetError={resetError}
        helpText={helpText}
        border
      />
    </MainWrapper>
  );
};

export default Login;
