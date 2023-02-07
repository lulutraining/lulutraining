import { UserBodyInfoType, UserProfile } from 'types/auth';
import { localStorageEffect } from './atomEffect';
import { atom } from 'recoil';

export const authState = atom<UserProfile>({
  key: 'auth/profile',
  default: {
    uid: '',
    displayName: '',
    body: {
      gender: '',
      age: '',
      height: '',
      weight: '',
    },
  },
  effects: [localStorageEffect('oz-user-profile')],
});
