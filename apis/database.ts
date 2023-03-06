import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  QuerySnapshot,
  setDoc,
} from 'firebase/firestore';
import { firestore } from 'services/firebase';
import { UserActiveInfoType, UserBodyInfoType } from 'types/auth';

interface DocumentOption {
  collectionName: string;
  documentName: string;
}

interface BodyWriteDocument extends DocumentOption {
  body: UserBodyInfoType;
}

interface ActiveWriteDocument extends DocumentOption {
  active: UserActiveInfoType;
}

export const db = {
  read: (collectionName: string): Promise<QuerySnapshot<DocumentData>> => {
    return getDocs(collection(firestore, collectionName));
  },
  readDoc: async (data: DocumentOption): Promise<DocumentData | undefined> => {
    return (await getDoc(doc(firestore, data.collectionName, data.documentName))).data();
  },
  bodyWrite: (data: BodyWriteDocument): Promise<void> => {
    return setDoc(
      doc(firestore, data.collectionName, data.documentName),
      {
        body: {
          gender: data.body.gender,
          age: data.body.age,
          height: data.body.height,
          weight: data.body.weight,
        },
      },
      { merge: true }
    );
  },
  activeWrite: (data: ActiveWriteDocument): Promise<void> => {
    return setDoc(
      doc(firestore, data.collectionName, data.documentName),
      {
        active: {
          answer: data.active.answer,
          grade: data.active.grade,
        },
      },
      { merge: true }
    );
  },
};
