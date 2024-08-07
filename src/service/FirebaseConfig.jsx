
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_GOOGLE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_GOOGLE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_GOOGLE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_GOOGLE_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:136314119296:web:b63be529141097b5797265",
  measurementId: "G-HR8GFSY96B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
