import { NextApiRequest, NextApiResponse } from 'next';
import { removeCookie } from 'utils/removeCookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', [removeCookie('user'), removeCookie('userProfile')]);
  res.status(200).json({ message: 'Successfully remove cookie!' });
};
