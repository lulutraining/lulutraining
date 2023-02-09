import { GetServerSidePropsContext } from 'next';
import { adminAuth, adminStore } from 'services/admin';
import { serialize } from 'cookie';

interface UnAuthorizedCheck {
  user: string | undefined;
  context: GetServerSidePropsContext;
  propsOption?: Object;
}

export const unAuthorizedCheck = async (data: UnAuthorizedCheck) => {
  const current = data.context.resolvedUrl;
  let userInfo = {
    uid: '',
    displayName: '',
    body: {},
    active: {},
  };

  if (data.user) {
    await adminAuth
      .verifySessionCookie(data.user, true)
      .then(async (decode) => {
        const userName = (await adminAuth.getUser(decode.uid)).displayName;
        userInfo = { ...userInfo, uid: decode.uid, displayName: userName || '' };
      })
      .catch(async () => {
        const userToken = serialize('user', 'no', {
          httpOnly: true,
          path: '/',
          expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
        });
        data.context.res.setHeader('Set-Cookie', userToken);
      });

    if (userInfo.uid) {
      const getUserDatabase = (await adminStore.doc(`users/${userInfo.uid}`).get()).data();
      userInfo = { ...userInfo, ...getUserDatabase };
      if (current === '/signin' || current === '/signup') {
        return {
          redirect: {
            destination: '/',
          },
        };
      }
    } else {
      if (current !== '/signin' && current !== '/signup') {
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
