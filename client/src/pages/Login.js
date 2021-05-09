import MainWrapper from 'components/shared/MainWrapper';
import SimpleForm from 'components/shared/SimpleForm';
import React from 'react';

const inputs = [
  {
    name: 'email',
    label: 'E-mail',
    rules: { required: true },
  },
];

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainWrapper>
      <SimpleForm inputs={inputs} onSubmit={onSubmit} />
    </MainWrapper>
  );
};

export default Login;
