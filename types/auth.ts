import { User } from 'firebase/auth';

export interface RequestAuth {
  email: string;
  password: string;
}

export interface RequestSignup extends RequestAuth {
  displayName: string;
}

export interface UpdateUserProfile {
  user: User;
  displayName: string;
}

export interface UserBodyInfoType {
  gender: string;
  age: string;
  height: string;
  weight: string;
}

export interface UserInfoType {
  uid: string;
  displayName: string;
  active: {
    [key: string]: number;
  };
  body: UserBodyInfoType;
}
