import { User } from 'firebase/auth';

export interface RequestAuth {
  email: string;
  password: string;
  displayName?: string;
}

export interface UserProfile {
  user: User;
  displayName: string;
}
