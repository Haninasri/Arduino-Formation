// 1. Firebase Configuration (firebase-config.js)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzbViZvT5IV4vT2ii5ppuZPZIGLGAI08I",
    authDomain: "arduino-formation.firebaseapp.com",
    databaseURL: "https://arduino-formation-default-rtdb.firebaseio.com",
    projectId: "arduino-formation",
    storageBucket: "arduino-formation.firebasestorage.app",
    messagingSenderId: "914642899030",
    appId: "1:914642899030:web:b61cdc75a60c4ddec22bf7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);