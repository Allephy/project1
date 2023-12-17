// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtE2QKVqDBkM9HK_E57oZ95XdHvLhp6vw",
  authDomain: "open-source-7f9c3.firebaseapp.com",
  databaseURL: "https://open-source-7f9c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "open-source-7f9c3",
  storageBucket: "open-source-7f9c3.appspot.com",
  messagingSenderId: "908903691224",
  appId: "1:908903691224:web:4a9bcf4f6a22bd84e338ad",
  measurementId: "G-LRX8HL9V7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db =  getDatabase(app);