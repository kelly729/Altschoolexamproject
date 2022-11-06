// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSqhTM9-Nmuxa2oxIUmy9Hkxi1oLyxbrc",
  authDomain: "random-user-app-ce1fd.firebaseapp.com",
  projectId: "random-user-app-ce1fd",
  storageBucket: "random-user-app-ce1fd.appspot.com",
  messagingSenderId: "345353401942",
  appId: "1:345353401942:web:c97b48b33a851dfefeadf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
