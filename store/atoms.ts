import { UserInfoType } from 'types/auth';
import { setCookieEffect } from './atomEffect';
import { atom } from 'recoil';
import { v1 } from 'uuid';
import { InitialUserInfo } from 'consts/initialUserInfo';

export const authState = atom<UserInfoType>({
  key: `auth/profile${v1()}`,
  default: InitialUserInfo,
  effects: [setCookieEffect('userProfile')],
});
