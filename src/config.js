import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6CYdqjJKycTEhGIMDESW9EiR-iJIso_4",
  authDomain: "notes-app-3c392.firebaseapp.com",
  projectId: "notes-app-3c392",
  storageBucket: "notes-app-3c392.firebasestorage.app",
  messagingSenderId: "671855188382",
  appId: "1:671855188382:web:ea408cc144e10210c19e8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };