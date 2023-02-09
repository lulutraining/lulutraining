import { Container } from './style';
import { authAPI } from 'apis/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const onSingOut = async () => {
    await authAPI.signout();
    await axios({ method: 'POST', url: '/api/auth/logout' });
    router.push('/signin');
  };

  return (
    <>
      <Head>
        <title>룰루트레이닝</title>
      </Head>
      <button onClick={onSingOut}>로그아웃</button>
      <Container>{children}</Container>
    </>
  );
};
