import { FormHelperText } from '@mui/material';
import { useCallback } from 'react';

interface AuthErrorProps {
  errorCode: string;
}

export const AuthError = (props: AuthErrorProps) => {
  const { errorCode } = props;

  const errorMessage = useCallback(
    (errorCode: string) => {
      switch (errorCode) {
        case 'auth/user-not-found':
          return '등록되지 않은 이메일입니다.';
          break;
        case 'auth/wrong-password':
          return '비밀번호가 일치하지 않습니다.';
          break;
        case 'auth/too-many-requests':
          return '로그인 10회 이상 실패로 서비스 이용이 차단되었습니다. 잠시 후 다시 시도해 주세요.';
        default:
          return '일시적인 오류로 로그인을 할 수 없습니다. 잠시 후 다시 시도해 주세요.';
      }
    },
    [errorCode]
  );

  return <FormHelperText error>{errorCode !== '' && errorMessage(errorCode)}</FormHelperText>;
};
