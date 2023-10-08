// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjUjIZruT29dNJbQTB_-gv7dPLPfIibY",
  authDomain: "project1-16f77.firebaseapp.com",
  projectId: "project1-16f77",
  storageBucket: "project1-16f77.appspot.com",
  messagingSenderId: "753489486973",
  appId: "1:753489486973:web:110cfd9306f220be23bd14",
  measurementId: "G-9CTH61TD4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const dbService = getFirestore(app);