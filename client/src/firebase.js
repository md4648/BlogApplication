// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blog-fb1a5.firebaseapp.com",
  projectId: "my-blog-fb1a5",
  storageBucket: "my-blog-fb1a5.appspot.com",
  messagingSenderId: "304073363277",
  appId: "1:304073363277:web:6cde0a5be4566b1a07f104"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);