import admin from 'firebase-admin';

const adminConfig = {
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
};

export const firebaseAdmin = admin.apps.length ? admin.app() : admin.initializeApp(adminConfig);
export const adminAuth = firebaseAdmin.auth();
export const adminStore = firebaseAdmin.firestore();
