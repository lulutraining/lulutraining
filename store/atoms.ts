import { UserInfoType } from 'types/auth';
import { setCookieEffect } from './atomEffect';
import { atom } from 'recoil';
import { v1 } from 'uuid';

export const InitialUserInfo = {
  uid: '',
  displayName: '',
  body: {
    gender: '',
    age: '',
    height: '',
    weight: '',
  },
  active: {},
};

export const authState = atom<UserInfoType>({
  key: `auth/profile${v1()}`,
  default: InitialUserInfo,
  effects_UNSTABLE: [setCookieEffect('userProfile')],
});
