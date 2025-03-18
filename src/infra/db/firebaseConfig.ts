import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { envs } from "../../shared/config/envs";

const { FIREBASE } = envs;

const firebaseConfig = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSANGIN_SENDER_ID,
  appId: FIREBASE.APP_ID,
  measurementId: FIREBASE.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const resourses = { STORES_COLLECTION: "stores" };
