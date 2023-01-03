import { User } from 'firebase/auth';

export interface RequestAuth {
  email: string;
  password: string;
}

export interface RequestSignup extends RequestAuth {
  displayName: string;
}

export interface UserProfile {
  displayName: string;
}

export interface UpdateUserProfile extends UserProfile {
  user: User;
}
