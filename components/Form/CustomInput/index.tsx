import { PasswordVisibility } from 'components';
import { Container } from './style';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputLabel = 'Email' | 'Password' | 'Nickname';

interface CustomInputProps {
  label: InputLabel;
  register: UseFormRegisterReturn;
  errorMsg?: string;
  inputType?: string;
  autoFocus?: boolean;
  value?: string;
}

export const emailValidation = {
  required: true,
  pattern: {
    value: /[\w-_.]+@[\w]+\.[\w.]+/,
    message: '이메일 형식에 맞게 입력해 주세요',
  },
};

export const passwordValidation = {
  required: true,
  minLength: {
    value: 6,
    message: '비밀번호는 6자 이상 입력해 주세요',
  },
};

const placeholderTxt = {
  Email: '이메일 형식의 아이디를 입력해 주세요',
  Nickname: '닉네임을 입력해주세요',
};

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, register, autoFocus, inputType, errorMsg } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Container>
      <label>{label}</label>
      {label === 'Password' ? (
        <>
          <TextField
            {...register}
            type={!passwordVisible ? 'password' : 'text'}
            placeholder="비밀번호를 입력해 주세요"
            error={errorMsg ? true : false}
            helperText={errorMsg}
          />
          <PasswordVisibility visible={passwordVisible} setVisible={setPasswordVisible} />
        </>
      ) : (
        <TextField
          {...register}
          defaultValue={value}
          autoFocus={autoFocus || false}
          type={inputType || 'text'}
          placeholder={placeholderTxt[label]}
          error={errorMsg ? true : false}
          helperText={errorMsg}
        />
      )}
    </Container>
  );
};
