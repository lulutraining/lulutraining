import { AuthError, CustomInput, Loader, SignupHeader } from 'components';
import { authAPI } from 'apis/auth';
import { RequestAuth } from 'types/auth';
import { Container } from 'styles/signup.style';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';

const Signup = () => {
  const router = useRouter();
  const [signupError, setSignupError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<RequestAuth>();

  const onVailSignup = async ({ email, password, displayName }: RequestAuth) => {
    setSignupError('');

    try {
      await authAPI.signup({ email, password });
      setIsLoading(true);

      await authAPI.updateProfile({
        user: getAuth().currentUser as User,
        displayName: displayName as string,
      });

      await router.push('/signup/body-check');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setSignupError(`${error.code}`);

        if (error.code === 'auth/email-already-in-use') {
          setFocus('email', { shouldSelect: true });
        }
      }
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SignupHeader title="회원가입" />
          <form onSubmit={handleSubmit(onVailSignup)}>
            <CustomInput
              label="Nickname"
              register={register('displayName', {
                required: '닉네임은 2자 이상 입력해주세요',
                minLength: {
                  value: 2,
                  message: '닉네임은 2자 이상 입력해주세요',
                },
              })}
              autoFocus={true}
              type="text"
              placeholder="닉네임을 입력해주세요"
              errorMsg={errors.displayName?.message}
            />
            <CustomInput
              label="Email"
              register={register('email', {
                required: '이메일 형식에 맞게 입력해 주세요',
                pattern: {
                  value: /[\w-_.]+@[\w]+\.[\w.]+/,
                  message: '이메일 형식에 맞게 입력해 주세요',
                },
              })}
              autoFocus={false}
              type="text"
              placeholder="이메일 형식의 아이디를 입력해주세요"
              errorMsg={errors.displayName || signupError ? '' : errors.email?.message}
            />
            <CustomInput
              label="Password"
              register={register('password', {
                required: '비밀번호는 6자 이상 입력해주세요',
                minLength: {
                  value: 6,
                  message: '비밀번호는 6자 이상 입력해주세요',
                },
              })}
              autoFocus={false}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              errorMsg={errors.email ? '' : errors.password?.message}
            />
            <AuthError errorCode={signupError} />
            <Button type="submit" className="signup__button-signup">
              가입하기
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default Signup;
