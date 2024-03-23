import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMGOTCXv8q0wmtvaI1qF45qgoDdL1_onw",
  authDomain: "netflix-gpt-6f738.firebaseapp.com",
  projectId: "netflix-gpt-6f738",
  storageBucket: "netflix-gpt-6f738.appspot.com",
  messagingSenderId: "625112817772",
  appId: "1:625112817772:web:56538f017985e4448ab849",
  measurementId: "G-F2QJS3WW0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth in central place

export const auth = getAuth();
