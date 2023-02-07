import { RequestAuth, UpdateUserProfile } from 'types/auth';
import { firebaseAuth } from 'services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
  signout: (): Promise<void> => {
    return signOut(firebaseAuth);
  },
  updateProfile: (data: UpdateUserProfile): Promise<void> => {
    return updateProfile(data.user, { displayName: data.displayName });
  },
};
