import { CustomInput } from 'components';
import { RequestAuth } from 'types/auth';
import { Container } from 'styles/signup.style';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import Image from 'next/image';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestAuth>();

  const onVailSignup = async (valid: RequestAuth) => {};

  return (
    <Container>
      <div className="signup__title">
        <h1>
          <Image src="/images/logo.svg" alt="oz-logo" width={144} height={144} priority />
        </h1>
        <p>회원가입</p>
      </div>
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
          errorMsg={errors.displayName ? '' : errors.email?.message}
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
        <Button type="submit" className="signup__button-signup">
          가입하기
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
