import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrblSWZD4EYzufGyfIey3cecTTlYJC2Io",
  authDomain: "shopsyapp-com.firebaseapp.com",
  projectId: "shopsyapp-com",
  storageBucket: "shopsyapp-com.firebasestorage.app",
  messagingSenderId: "668160364541",
  appId: "1:668160364541:web:0e0e63f338330b6b711394",
  measurementId: "G-1BS5TWXNL9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
