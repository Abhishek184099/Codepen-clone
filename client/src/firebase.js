// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAz5RJbuMaV2tVgS-uCepDvmMI54222nE",
  authDomain: "codepen-clone-3c0fe.firebaseapp.com",
  projectId: "codepen-clone-3c0fe",
  storageBucket: "codepen-clone-3c0fe.appspot.com",
  messagingSenderId: "619470777066",
  appId: "1:619470777066:web:35b0da47dcd8752009c593",
  measurementId: "G-XSESFCQ4JL"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
