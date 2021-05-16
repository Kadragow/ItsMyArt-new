import useAuth from 'auth/useAuth';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import MainWrapper from 'components/shared/MainWrapper';
import SimpleForm from 'components/shared/SimpleForm';
import routes from 'routes/routes';
import { SimpleLink } from 'components/atoms/SimpleLink';

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

  const resetError = () => setError(null);

  const onSubmit = async (data) => {
    const result = await login(data);

    if (result === 'success') history.push(history.location.state?.from || '/');

    if (result?.data) setError(result.data);
  };

  const helpText = (
    <span>
      Don't have account?{' '}
      <SimpleLink to={routes.register}>Register right now!</SimpleLink>
    </span>
  );

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
