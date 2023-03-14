import { Container } from './style';
import Head from 'next/head';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>룰루트레이닝</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
};
