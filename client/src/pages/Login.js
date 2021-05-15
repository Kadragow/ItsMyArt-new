import useAuth from 'auth/useAuth';
import MainWrapper from 'components/shared/MainWrapper';
import SimpleForm from 'components/shared/SimpleForm';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

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

  return (
    <MainWrapper center>
      <SimpleForm
        submitLabel="Log me in!"
        inputs={inputs}
        onSubmit={onSubmit}
        error={error}
        resetError={resetError}
        border
      />
    </MainWrapper>
  );
};

export default Login;
