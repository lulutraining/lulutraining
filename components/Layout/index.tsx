import { Container } from './style';
import { authAPI, localAuth } from 'apis/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  const handleSingOut = async () => {
    await authAPI.signout();
    await localAuth.signout();
    router.push('/signin');
  };

  return (
    <>
      <Head>
        <title>룰루트레이닝</title>
      </Head>
      {/* <button onClick={handleSingOut}>로그아웃</button> */}
      <Container>{children}</Container>
    </>
  );
};
