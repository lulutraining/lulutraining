import { AuthInput, Characters } from 'components';
import { RequestAuth } from 'types/auth';
import { Container } from 'styles/siginin.style';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestAuth>();

  const onValidSignin = ({ email, password }: RequestAuth) => {
    console.log('로그인');
  };

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
        <button className="signin-btn">로그인</button>
      </form>
      <Button className="signup-btn">회원가입</Button>
    </Container>
  );
};

export default Signin;
