import { DEFAULT_LEVEL } from 'consts';
import { UserInfoType } from 'types/auth';
import { setCookieEffect } from './atomEffect';
import { atom } from 'recoil';
import { v1 } from 'uuid';

export const InitialUserInfo = {
  uid: '',
  displayName: '',
  body: {
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
  },
  active: {
    answer: {
      answer1: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
    },
    grade: DEFAULT_LEVEL.basic,
  },
};

export const authState = atom<UserInfoType>({
  key: `auth/profile${v1()}`,
  default: InitialUserInfo,
  effects_UNSTABLE: [setCookieEffect('userProfile')],
});
