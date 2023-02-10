import { GetServerSidePropsContext } from 'next';
import { adminAuth, adminStore } from 'services/admin';
import { serialize } from 'cookie';

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
  let userInfo = {
    uid: '',
    displayName: '',
  };

  if (data.user) {
    try {
      const { uid } = await verifyUser(data.user);
      const { displayName } = await adminAuth.getUser(uid);
      if (displayName) {
        const userPersonalData = (await adminStore.doc(`users/${uid}`).get()).data();
        userInfo = { ...userInfo, ...userPersonalData, uid, displayName };
      }
      if (current === '/signin' || current === '/signup') {
        return {
          redirect: {
            destination: '/',
          },
        };
      }
    } catch (error) {
      const userToken = serialize('user', 'no', {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
      });
      data.context.res.setHeader('Set-Cookie', userToken);
      if (current === '/bodycheck' || current === '/activecheck') {
        return {
          redirect: {
            destination: '/signin',
          },
        };
      }
    }
  }

  return {
    props: {
      userInfo,
      propsOption: data.propsOption || {},
    },
  };
};
