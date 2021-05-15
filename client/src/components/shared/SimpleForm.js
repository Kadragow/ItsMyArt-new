import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled, { css } from 'styled-components';
import SimpleInput from 'components/atoms/SimpleInput';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { device } from 'styles/devices';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ border, error, theme }) =>
    border &&
    css`
      border: 2px solid ${error ? 'red' : theme.secondary};
      padding: 3rem;
    `}

  @media ${device.tablet} {
    width: 500px;
  }
`;

const errorMessages = {
  required: 'This field is required.',
  minLength: 'This field did not match minimal length.',
  maxLength: 'This field did not match maximum length.',
};

const SimpleForm = ({
  submitLabel,
  inputs,
  onSubmit,
  error,
  resetError,
  border,
  minHeight,
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
          error={
            errorMessages[errors[input.name]?.type] ||
            (error && error[input.name]?.message)
          }
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
      error={Boolean(error || Object.keys(errors).length !== 0)}
      minHeight={minHeight}
    >
      {mappedInputs}
      <SimpleButton type="submit" style={{ marginTop: '5vh' }}>
        {submitLabel}
      </SimpleButton>
    </Form>
  );
};

export default SimpleForm;
