import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import SimpleInput from 'components/atoms/SimpleInput';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SimpleForm = ({ inputs, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const mappedInputs = inputs.map((input) => (
    <Controller
      name={input.name}
      control={control}
      defaultValue={input.defaultValue}
      rules={input.rules}
      render={({ field }) => (
        <SimpleInput
          label={input.label}
          error={Boolean(errors[input.name])}
          {...field}
        />
      )}
    />
  ));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {mappedInputs}
      <button type="submit">label</button>
    </Form>
  );
};

export default SimpleForm;
