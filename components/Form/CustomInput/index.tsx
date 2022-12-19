import { PasswordVisibility } from 'components';
import { Container } from './style';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputLabel = 'Email' | 'Password' | 'Nickname' | '나이(만)' | '신장(cm)' | '체중(kg)';

interface CustomInputProps {
  label: InputLabel;
  register: UseFormRegisterReturn;
  autoFocus: boolean;
  type: 'text' | 'number' | 'email' | 'password';
  errorMsg?: string;
  value?: string;
}

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, register, autoFocus, type, errorMsg } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const placeholderTxt = {
    Email: '이메일 형식의 아이디를 입력해 주세요',
    Nickname: '닉네임을 입력해주세요',
    '나이(만)': '만 나이를 입력해주세요 ',
    '신장(cm)': '키를 입력해주세요',
    '체중(kg)': '체중을 입력해주세요',
  };

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
          placeholder={placeholderTxt[label]}
          error={errorMsg ? true : false}
          helperText={errorMsg}
        />
      )}
    </Container>
  );
};
