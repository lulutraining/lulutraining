import { AuthError, CustomInput } from 'components';
import { authAPI } from 'apis/auth';
import { RequestAuth } from 'types/auth';
import { Container } from 'styles/siginin.style';
import logoImage from '/public/images/logo.png';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FirebaseError } from 'firebase/app';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestAuth>();
  const router = useRouter();
  const [signinError, setSigninError] = useState('');

  const onValidSignin = async ({ email, password }: RequestAuth) => {
    setSigninError('');
    try {
      await authAPI.signin({
        email,
        password,
      });
      router.push('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setSigninError(`${error.code}`);
      }
    }
  };

  return (
    <Container>
      <div className="signin__title">
        <h1>
          <Image src={logoImage} alt="lulutraining-logo" priority />
        </h1>
        <p>로그인</p>
      </div>
      <form onSubmit={handleSubmit(onValidSignin)}>
        <CustomInput
          label="Email"
          register={register('email', {
            required: '이메일 형식에 맞게 입력해 주세요',
            pattern: {
              value: /[\w-_.]+@[\w]+\.[\w.]+/,
              message: '이메일 형식에 맞게 입력해 주세요',
            },
          })}
          type="text"
          errorMsg={errors.email?.message}
          placeholder="이메일 형식의 아이디를 입력해주세요"
          autoFocus={true}
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
          type="password"
          errorMsg={errors.password?.message}
          placeholder="비밀번호를 입력해주세요"
          autoFocus={false}
        />
        <AuthError errorCode={signinError} />
        <button className="signin-btn">로그인</button>
      </form>
      <Button className="signup-btn" onClick={() => router.push('/signup')}>
        회원가입
      </Button>
    </Container>
  );
};

export default Signin;
