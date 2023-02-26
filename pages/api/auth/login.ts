import { InitialUserInfo } from 'store/atoms';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth, adminStore } from 'services/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;

  let userInfo = {};

  if (token) {
    try {
      await adminAuth.verifyIdToken(token, true);
      const getSessionCookie = await adminAuth.createSessionCookie(token, {
        expiresIn: 24 * 14 * 60 * 60 * 1000,
      });

      const userToken = serialize('user', getSessionCookie, {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 24 * 14 * 60 * 60 * 1000),
      });

      const { uid } = await adminAuth.verifySessionCookie(getSessionCookie, true);
      const { displayName } = await adminAuth.getUser(uid);
      if (displayName) {
        const userPersonalData = (await adminStore.doc(`users/${uid}`).get()).data();
        if (userPersonalData) {
          userInfo = { ...InitialUserInfo, ...userPersonalData, uid, displayName };
        } else {
          userInfo = { ...InitialUserInfo, uid, displayName };
        }
      }
      res.setHeader('Set-Cookie', userToken);
      res.status(200).json({ userInfo });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: 'invlalid token' });
    }
  }
};
