import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeSY0MvZ88RHUeI_XNlArL9c1E1S5iVp0",
  authDomain: "heaven-mart.firebaseapp.com",
  projectId: "heaven-mart",
  storageBucket: "heaven-mart.appspot.com",
  messagingSenderId: "895292151025",
  appId: "1:895292151025:web:21377917829b5225d0c550",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default firebaseApp;
