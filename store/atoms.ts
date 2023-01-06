import { UserProfile } from 'types/auth';
import { localStorageEffect } from './atomEffect';
import { atom } from 'recoil';

export const authState = atom<UserProfile>({
  key: 'auth/profile',
  default: {
    displayName: '',
  },
  effects: [localStorageEffect('oz-user-profile')],
});
