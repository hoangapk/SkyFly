import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCRkVlUYGKLPl2p5c-Ml7fj-pUKq_ARJHQ",
  authDomain: "skyfly-9b552.firebaseapp.com",
  projectId: "skyfly-9b552",
  storageBucket: "skyfly-9b552.firebasestorage.app",
  messagingSenderId: "290427659841",
  appId: "1:290427659841:web:16780b7e8551738cd088c0",
  measurementId: "G-CVSMFHZMDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();