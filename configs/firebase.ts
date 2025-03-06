// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//@ts-ignore
import {getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_CLOUD_FIREBASE_API,
  authDomain: "campus-event-5b4a3.firebaseapp.com",
  projectId: "campus-event-5b4a3",
  storageBucket: "campus-event-5b4a3.firebasestorage.app",
  messagingSenderId: "403303486889",
  appId: "1:403303486889:web:017a785aa33418d8cd20b8",
  measurementId: "G-8WN18ESPJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage),
});
// const analytics = getAnalytics(app);