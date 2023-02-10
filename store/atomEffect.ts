import { Cookies } from 'react-cookie';
import { AtomEffect } from 'recoil';

export const setCookieEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const cookies = new Cookies();
      const savedValue = cookies.get(key);
      if (savedValue != null) {
        setSelf(savedValue);
      }
      onSet((newValue) => {
        cookies.set(key, newValue, {
          path: '/',
          expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
        });
      });
    }
  };
