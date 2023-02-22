import { serialize } from 'cookie';

export const removeCookie = (key: string) => {
  return serialize(key, '', {
    httpOnly: true,
    path: '/',
    expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
  });
};
