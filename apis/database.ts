import {
  collection,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  setDoc,
  where,
} from 'firebase/firestore';
import { firestore } from 'services/firebase';

interface DocumentOption {
  collectionName: string;
  documentName: string;
}

interface BodyWriteDocument extends DocumentOption {
  gender: string;
  age: number;
  height: number;
  weight: number;
}

interface ActiveWriteDocument extends DocumentOption {
  active: {
    [answer: string]: number;
  };
}

export const db = {
  read: (collectionName: string): Promise<QuerySnapshot<DocumentData>> => {
    return getDocs(collection(firestore, collectionName));
  },
  bodyWrite: (data: BodyWriteDocument): Promise<void> => {
    return setDoc(
      doc(firestore, data.collectionName, data.documentName),
      {
        gender: data.gender,
        age: data.age,
        height: data.height,
        weight: data.weight,
      },
      { merge: true }
    );
  },
  activeWrite: (data: ActiveWriteDocument): Promise<void> => {
    return setDoc(
      doc(firestore, data.collectionName, data.documentName),
      {
        active: data.active,
      },
      { merge: true }
    );
  },
};
