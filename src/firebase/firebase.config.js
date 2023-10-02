// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9K1c58khsO-h-5hod3IeHkpWZb3VkzQ",
  authDomain: "auth-moha-milon-9fd28.firebaseapp.com",
  projectId: "auth-moha-milon-9fd28",
  storageBucket: "auth-moha-milon-9fd28.appspot.com",
  messagingSenderId: "726430852066",
  appId: "1:726430852066:web:fa0e920b7b5e6914648fbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
