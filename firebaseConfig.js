import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
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
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getFirestore();
