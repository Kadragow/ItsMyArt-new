import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled, { css } from 'styled-components';
import SimpleInput from 'components/atoms/SimpleInput';
import { SimpleButton } from 'components/atoms/SimpleButton';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ border, theme }) =>
    border &&
    css`
      border: 2px solid ${theme.secondary};
      padding: 3rem;
    `}
`;

const SimpleForm = ({
  submitLabel,
  inputs,
  onSubmit,
  error,
  resetError,
  border,
}) => {
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
          type={input.type}
          error={Boolean(errors[input.name] || error)}
          {...field}
        />
      )}
    />
  ));

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      border={border}
      onChange={resetError}
    >
      {mappedInputs}
      <SimpleButton type="submit" style={{ marginTop: '7vh' }}>
        {submitLabel}
      </SimpleButton>
    </Form>
  );
};

export default SimpleForm;
