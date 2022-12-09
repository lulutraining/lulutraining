import { PasswordVisibility } from 'components';
import { RequestAuth } from 'types/auth';
import { Container } from './style';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface AuthInputProps {
  label: string;
  register: UseFormRegister<RequestAuth>;
  errorMsg?: string;
}

export const AuthInput = (props: AuthInputProps) => {
  const { label, register, errorMsg } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Container>
      <label>{label}</label>
      {label === 'Email' ? (
        <TextField
          {...register('email', {
            required: true,
            pattern: {
              value: /[\w-_.]+@[\w]+\.[\w.]+/,
              message: '이메일 형식에 맞게 입력해 주세요',
            },
          })}
          autoFocus
          type="text"
          placeholder="이메일 형식의 아이디를 입력해 주세요"
          error={errorMsg ? true : false}
          helperText={errorMsg}
        />
      ) : (
        <>
          <TextField
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: '비밀번호는 6자 이상 입력해 주세요',
              },
            })}
            type={!passwordVisible ? 'password' : 'text'}
            placeholder="비밀번호를 입력해 주세요"
            error={errorMsg ? true : false}
            helperText={errorMsg}
          />
          <PasswordVisibility visible={passwordVisible} setVisible={setPasswordVisible} />
        </>
      )}
    </Container>
  );
};
