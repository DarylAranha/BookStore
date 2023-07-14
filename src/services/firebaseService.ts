// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJWHvbqy_kqGKWYXwy2mmmmxrMzN6VPc",
  authDomain: "bookstore-3b84f.firebaseapp.com",
  projectId: "bookstore-3b84f",
  storageBucket: "bookstore-3b84f.appspot.com",
  messagingSenderId: "473611481545",
  appId: "1:473611481545:web:e2c7d4e9434183e6d73818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
