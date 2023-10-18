// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc5BmCOqO1MbsdMMY56SjJn_WLEDQ10AQ",
  authDomain: "geography-11a-v1.firebaseapp.com",
  projectId: "geography-11a-v1",
  storageBucket: "geography-11a-v1.appspot.com",
  messagingSenderId: "736475348798",
  appId: "1:736475348798:web:f8e5129db1632d6feab66f",
  measurementId: "G-X5H8G5ES26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import firebase from 'https://geography-11a-v1.web.app/';
import 'firebase/database'; // or 'firebase/firestore' if you're using Firestore

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);
