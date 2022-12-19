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
      <>
        <TextField
          {...register}
          type={type === 'password' ? (!passwordVisible ? 'password' : 'text') : type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          error={errorMsg ? true : false}
          helperText={errorMsg}
          autoComplete="off"
          defaultValue={value}
        />
        {label === 'Password' && (
          <PasswordVisibility visible={passwordVisible} setVisible={setPasswordVisible} />
        )}
      </>
    </Container>
  );
};
