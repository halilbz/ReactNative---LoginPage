// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwqRDcLGhUiRECZU_0p6RbgIwIdzekclY",
  authDomain: "login-app-9d020.firebaseapp.com",
  projectId: "login-app-9d020",
  storageBucket: "login-app-9d020.appspot.com",
  messagingSenderId: "958984765217",
  appId: "1:958984765217:web:628c0e850060c7dbba8860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app; //bu arkadaşı rootnavigationda çağırcam sadece