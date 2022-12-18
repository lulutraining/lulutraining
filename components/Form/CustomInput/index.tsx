import { TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Container } from './style';

interface CustomInputProps {
  label: string;
  register: UseFormRegisterReturn;
  placeholderTxt: string;
  inputType?: string;
  autoFocus?: boolean;
  errorMsg?: string;
  value?: string;
}

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, register, autoFocus, inputType, placeholderTxt, errorMsg } = props;
  return (
    <Container>
      <label>{label}</label>
      <TextField
        {...register}
        defaultValue={value}
        autoFocus={autoFocus || false}
        type={inputType || 'text'}
        placeholder={placeholderTxt}
        error={errorMsg ? true : false}
        helperText={errorMsg}
      />
    </Container>
  );
};
