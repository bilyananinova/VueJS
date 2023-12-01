// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyALm_QctZIa7QnVJ8P3Ca9L1cKywbcjAKo',
//   authDomain: 'coffee-shop-63a80.firebaseapp.com',
//   databaseURL: 'https://coffee-shop-63a80-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'coffee-shop-63a80',
//   storageBucket: 'coffee-shop-63a80.appspot.com',
//   messagingSenderId: '269153652715',
//   appId: '1:269153652715:web:90cbb24f1352015e0993ae',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBMzBvy2Wl8nOb1yPm3PjXXf1Pp1HYiWe4',
  authDomain: 'coffee-d1146.firebaseapp.com',
  projectId: 'coffee-d1146',
  storageBucket: 'coffee-d1146.appspot.com',
  messagingSenderId: '723283406376',
  appId: '1:723283406376:web:eef490623d82270abc8f1d',
};

// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig));
const auth = getAuth();

export { db, auth };
