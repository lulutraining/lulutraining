import { AuthError, AuthInput, Characters } from 'components';
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
        return { ...prevProfile, userName: data.user.displayName || '' };
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        setSigninError(`${error.code}`);
      }
    } finally {
      router.push('/');
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
        <Characters />
      </div>
      <form onSubmit={handleSubmit(onValidSignin)}>
        <AuthInput label="Email" register={register} errorMsg={errors.email?.message} />
        <AuthInput label="Password" register={register} errorMsg={errors.password?.message} />
        <AuthError errorCode={signinError} />
        <button className="signin-btn">로그인</button>
      </form>
      <Button className="signup-btn">회원가입</Button>
    </Container>
  );
};

export default Signin;
