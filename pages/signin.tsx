import { AuthError, CustomInput } from 'components';
import { authAPI } from 'apis/auth';
import { RequestAuth } from 'types/auth';
import { authState } from 'store/atoms';
import { Container } from 'styles/siginin.style';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestAuth>();
  const router = useRouter();
  const setProfile = useSetRecoilState(authState);
  const [signinError, setSigninError] = useState('');

  const onValidSignin = async ({ email, password }: RequestAuth) => {
    setSigninError('');
    try {
      const data = await authAPI.signin({
        email,
        password,
      });
      localStorage.setItem('oz-user', data.user.uid);
      setProfile((prevProfile) => {
        return { ...prevProfile, displayName: data.user.displayName || '' };
      });
      router.push('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setSigninError(`${error.code}`);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('oz-user');
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <Container>
      <div className="signin__header">
        <h2 className="signin__header-title">
          오즈<span className="header-small-text">의</span>
          <br />
          트레이닝 클럽
        </h2>
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
