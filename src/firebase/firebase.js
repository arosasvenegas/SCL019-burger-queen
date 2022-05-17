// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmPhq5ifew6Ey8VZdrxvYPrcSxyjjjIxA",
  authDomain: "burgerqueen2-7f4b7.firebaseapp.com",
  projectId: "burgerqueen2-7f4b7",
  storageBucket: "burgerqueen2-7f4b7.appspot.com",
  messagingSenderId: "833094166988",
  appId: "1:833094166988:web:ea2cd285d4e68ad1d3d569",
  measurementId: "G-B40LM77ZZY"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore();

