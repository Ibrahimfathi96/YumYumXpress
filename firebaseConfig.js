import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGlAtcKvrfEFbYWm0HvuJO6yLX8haFrwg",
  authDomain: "yumyumxpress-58955.firebaseapp.com",
  projectId: "yumyumxpress-58955",
  storageBucket: "yumyumxpress-58955.appspot.com",
  messagingSenderId: "171912789768",
  appId: "1:171912789768:web:df71e3faa76978f40076bd",
  measurementId: "G-8KKXPTXXSK",
};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
