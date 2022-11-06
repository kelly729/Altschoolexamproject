// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByMO8c_F_1f3dUYyiKPHPWyKSZ0mv6YVk",
  authDomain: "randomuserapp-26e4c.firebaseapp.com",
  projectId: "randomuserapp-26e4c",
  storageBucket: "randomuserapp-26e4c.appspot.com",
  messagingSenderId: "176009727968",
  appId: "1:176009727968:web:c86c89702a318d94abe585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);