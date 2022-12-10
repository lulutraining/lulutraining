import { RequestAuth } from 'types/auth';
import { firebaseAuth } from 'services/firebase';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

export const authAPI = {
  signin: (data: RequestAuth): Promise<UserCredential> => {
    return signInWithEmailAndPassword(firebaseAuth, data.email, data.password);
  },
};
