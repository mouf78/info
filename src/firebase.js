// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPfUt60a2cHS8Hyz9annp7g4Xp5OZ1BqQ",
  authDomain: "info-12566.firebaseapp.com",
  projectId: "info-12566",
  storageBucket: "info-12566.appspot.com",
  messagingSenderId: "198987378660",
  appId: "1:198987378660:web:5f45a511a909882782e1f1",
  measurementId: "G-0BMXEQM2N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: initialize analytics
getAnalytics(app);

// Export initialized app and auth
export const auth = getAuth(app);
export default app;
