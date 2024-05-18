// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's twitter v-3 Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v3-5c805.firebaseapp.com",
  projectId: "twitter-v3-5c805",
  storageBucket: "twitter-v3-5c805.appspot.com",
  messagingSenderId: "313110249554",
  appId: "1:313110249554:web:fa09ce3f6c22b36ed89f8b"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
