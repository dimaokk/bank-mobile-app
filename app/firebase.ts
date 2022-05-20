// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAak3O-Ej3GdetHSJM5l3n-SbEntEAI7pQ",
  authDomain: "tinkoffcopy.firebaseapp.com",
  projectId: "tinkoffcopy",
  storageBucket: "tinkoffcopy.appspot.com",
  messagingSenderId: "523927264807",
  appId: "1:523927264807:web:41b93108683b82cf487802",
  measurementId: "G-0DDX0WNL7C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
