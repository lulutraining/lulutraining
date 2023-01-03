import { RequestAuth, UpdateUserProfile } from 'types/auth';
import { firebaseAuth } from 'services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth';

export const authAPI = {
  signin: (data: RequestAuth): Promise<UserCredential> => {
    return signInWithEmailAndPassword(firebaseAuth, data.email, data.password);
  },
  signup: (data: RequestAuth): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);
  },
  updateProfile: (data: UpdateUserProfile): Promise<void> => {
    return updateProfile(data.user, { displayName: data.displayName });
  },
};
