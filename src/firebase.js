import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // Optional depending on use case, but needed if standard config
  // authDomain: "YOUR_DOMAIN",
  // storageBucket: "YOUR_BUCKET",
  // messagingSenderId: "YOUR_MESSAGING_ID",
  // appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
