import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdFTRnn7zrsU6abpVeRfkTfEmL7i7fpW4",
  authDomain: "assignment-twelve-d99dd.firebaseapp.com",
  projectId: "assignment-twelve-d99dd",
  storageBucket: "assignment-twelve-d99dd.firebasestorage.app",
  messagingSenderId: "1080466899327",
  appId: "1:1080466899327:web:b2308ad35f1436c116da4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
