// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALm_QctZIa7QnVJ8P3Ca9L1cKywbcjAKo',
  authDomain: 'coffee-shop-63a80.firebaseapp.com',
  databaseURL: 'https://coffee-shop-63a80-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'coffee-shop-63a80',
  storageBucket: 'coffee-shop-63a80.appspot.com',
  messagingSenderId: '269153652715',
  appId: '1:269153652715:web:90cbb24f1352015e0993ae',
};

// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig));

export default db;
