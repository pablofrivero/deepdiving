

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Wrd3ASlMVL8gHxeAB1MYe5druODHjwo",
  authDomain: "ecommerce-deepdiving.firebaseapp.com",
  projectId: "ecommerce-deepdiving",
  storageBucket: "ecommerce-deepdiving.appspot.com",
  messagingSenderId: "510727335548",
  appId: "1:510727335548:web:23dfcb7b9870b35400a3f9"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);


export const db = getFirestore(app);