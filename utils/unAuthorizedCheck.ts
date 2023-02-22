import { removeCookie } from './removeCookie';
import { adminAuth } from 'services/admin';
import { GetServerSidePropsContext } from 'next';

export interface VerifyUserType {
  user: string | undefined;
  context: GetServerSidePropsContext;
  propsOption?: Object;
}

export const unAuthorizedCheck = async (data: VerifyUserType) => {
  const current = data.context.resolvedUrl;
  const verifyUser = async (user: string) => {
    return await adminAuth.verifySessionCookie(user, true);
  };
  if (data.user) {
    try {
      await verifyUser(data.user);
      if (current === '/signin' || current === '/signup') {
        return {
          redirect: {
            destination: '/',
          },
        };
      }
    } catch (error) {
      data.context.res.setHeader('Set-Cookie', [removeCookie('user'), removeCookie('userProfile')]);
      if (current === '/bodycheck' || current === '/activecheck') {
        return {
          redirect: {
            destination: '/signin',
          },
        };
      }
    }
  } else {
    if (current === '/bodycheck' || current === '/activecheck') {
      return {
        redirect: {
          destination: '/signin',
        },
      };
    }
  }

  return {
    props: {
      propsOption: data.propsOption || {},
    },
  };
};
