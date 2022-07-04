// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqXXwkEjGfaRvZtKvAD_Vv-fxukKN4im4",
  authDomain: "budget-app-f07d6.firebaseapp.com",
  projectId: "budget-app-f07d6",
  storageBucket: "budget-app-f07d6.appspot.com",
  messagingSenderId: "1037550735519",
  appId: "1:1037550735519:web:f26a796164148a6e2212aa",
  measurementId: "G-1FJG656RRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};