import Head from 'next/head';
import { Container } from './style';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>오즈의 트레이닝</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
};
