import { PasswordVisibility } from 'components';
import { Container } from './style';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CustomInputProps {
  label: string;
  register: UseFormRegisterReturn;
  autoFocus: boolean;
  type: string;
  placeholder: string;
  errorMsg?: string;
  value?: string;
}

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, register, placeholder, autoFocus, type, errorMsg } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Container>
      <label>{label}</label>
      {label === 'Password' ? (
        <>
          <TextField
            {...register}
            type={!passwordVisible ? 'password' : 'text'}
            placeholder={placeholder}
            error={errorMsg ? true : false}
            helperText={errorMsg}
            autoComplete="off"
          />
          <PasswordVisibility visible={passwordVisible} setVisible={setPasswordVisible} />
        </>
      ) : (
        <TextField
          {...register}
          defaultValue={value}
          autoFocus={autoFocus}
          type={type}
          placeholder={placeholder}
          error={errorMsg ? true : false}
          helperText={errorMsg}
        />
      )}
    </Container>
  );
};
