import { Container } from './style';
import { db } from 'apis/database';
import { authState } from 'store/atoms';
import { authAPI } from 'apis/auth';
import { firebaseAuth } from 'services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(authState);
  const resetUserInfo = useResetRecoilState(authState);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const getUserPersonalInfo = await db.readDoc({
          collectionName: 'users',
          documentName: user.uid,
        });

        setUserInfo((prev) => {
          return {
            ...prev,
            uid: user.uid,
            displayName: user?.displayName,
            body: getUserPersonalInfo?.body || {
              gender: '',
              age: '',
              height: '',
              weight: '',
            },
          };
        });
      }
    });
  }, [router.pathname]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        if (router.pathname === '/signin' || router.pathname === '/signup') {
          router.push('/');
        }
      } else {
        resetUserInfo();
        if (router.pathname !== '/signin' && router.pathname !== '/signup') {
          router.push('/signin');
        }
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>룰루트레이닝</title>
      </Head>
      <button onClick={() => authAPI.signout()}>로그아웃</button>
      <Container>{children}</Container>
    </>
  );
};
