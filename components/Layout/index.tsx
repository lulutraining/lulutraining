import { Container } from './style';
import { UnathorizedResult } from 'components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/signin' || pathname === '/signup') {
      setIsModalOpen(false);
    } else {
      !localStorage.getItem('oz-user') && setIsModalOpen(true);
    }
  }, [pathname]);
  return (
    <>
      <Head>
        <title>오즈의 트레이닝</title>
      </Head>
      <Container>{children}</Container>
      <UnathorizedResult isLogin={isModalOpen} />
    </>
  );
};
