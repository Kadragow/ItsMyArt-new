import useAuth from 'auth/useAuth';
import { SimpleLink } from 'components/atoms/SimpleLink';
import MainWrapper from 'components/shared/MainWrapper';
import SimpleForm from 'components/shared/SimpleForm';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import routes from 'routes/routes';

const inputs = [
  {
    name: 'nickname',
    label: 'Nickname',
    rules: { required: true, minLength: 5, maxLength: 30 },
  },
  {
    name: 'email',
    label: 'E-mail',
    rules: { required: true },
  },
  {
    name: 'password',
    label: 'Password',
    rules: { required: true, minLength: 5, maxLength: 30 },
    type: 'password',
  },
  {
    name: 'repeatPassword',
    label: 'Repeat password',
    rules: { required: true, minLength: 5, maxLength: 30 },
    type: 'password',
  },
];

const Register = () => {
  const [error, setError] = useState();
  const { register } = useAuth();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const resetError = () => setError(null);

  const onSubmit = async (data) => {
    const result = await register(data);

    if (result === 'success') history.push(history.location.state?.from || '/');

    if (result?.data) setError(result.data);
  };

  const helpText = (
    <span>
      Already have an account?{' '}
      <SimpleLink to={routes.login}>Login right now!</SimpleLink>
    </span>
  );

  if (isAuthenticated)
    return <Redirect to={history.location.state?.from || '/'} />;

  return (
    <MainWrapper center>
      <SimpleForm
        submitLabel="Register!"
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

export default Register;
