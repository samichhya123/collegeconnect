// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPf44qXt4AdbLoNZPQRsUjC_x-v8faWmI",
  authDomain: "college-connect-cd422.firebaseapp.com",
  projectId: "college-connect-cd422",
  storageBucket: "college-connect-cd422.appspot.com",
  messagingSenderId: "896677057897",
  appId: "1:896677057897:web:236af2ecb8bc1e878319f8",
  measurementId: "G-XYJEP1BMEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };
export { auth };
export default app;
