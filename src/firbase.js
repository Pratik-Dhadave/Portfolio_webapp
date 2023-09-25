// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB34quLb2nWkErOgEGzHIT8XhpNlsXa47c",
  authDomain: "react-portfolio-pratik007.firebaseapp.com",
  projectId: "react-portfolio-pratik007",
  storageBucket: "react-portfolio-pratik007.appspot.com",
  messagingSenderId: "103229913054",
  appId: "1:103229913054:web:481535812282809ba2cf4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();