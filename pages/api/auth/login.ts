import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from 'services/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;
  if (token) {
    await adminAuth
      .verifyIdToken(token)
      .then(async () => {
        const getSessionCookie = await adminAuth.createSessionCookie(token, {
          expiresIn: 336 * 60 * 60 * 1000,
        });
        const userToken = serialize('user', getSessionCookie, {
          httpOnly: true,
          path: '/',
          expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
        });
        res.setHeader('Set-Cookie', userToken);
        res.status(200).json({ message: 'Successfully set cookie!' });
      })
      .catch(() => {
        res.status(401).json({ message: 'invlalid token' });
      });
  }
};
