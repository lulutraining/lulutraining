import { InitialUserInfo } from 'consts/initialUserInfo';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth, adminStore } from 'services/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;
  const verifyToken = async (token: string) => {
    return await adminAuth.verifyIdToken(token, true);
  };
  const verifyUser = async (user: string) => {
    return await adminAuth.verifySessionCookie(user, true);
  };
  const createCookie = async (token: string) => {
    return await adminAuth.createSessionCookie(token, {
      expiresIn: 336 * 60 * 60 * 1000,
    });
  };

  let userInfo = {};

  if (token) {
    try {
      await verifyToken(token);
      const getSessionCookie = await createCookie(token);
      const userToken = serialize('user', getSessionCookie, {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
      });

      const { uid } = await verifyUser(getSessionCookie);
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
