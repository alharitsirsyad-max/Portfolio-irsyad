import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4QjkxQefMeRUBGoMsATlq27PcuED5o5U",
  authDomain: "portfolio-f6b74.firebaseapp.com",
  databaseURL: "https://portfolio-f6b74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-f6b74",
  storageBucket: "portfolio-f6b74.firebasestorage.app",
  messagingSenderId: "731720628624",
  appId: "1:731720628624:web:30b91a7069c6bb9989db15",
  measurementId: "G-F837CQGMB9",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
