import { User } from 'firebase/auth';
import { ResponseCourse } from './training';

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
  age: number;
  height: number;
  weight: number;
}

export interface UserActiveInfoType {
  answer: { [answer: string]: number };
  grade: string;
}

export interface UserInfoType {
  uid: string;
  displayName: string;
  active: UserActiveInfoType;
  body: UserBodyInfoType;
  bookmark: ResponseCourse[];
}
