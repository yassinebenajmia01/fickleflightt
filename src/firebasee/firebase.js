// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3iQdglEH4OOIlaXq3Z_F1snIdlZ76nuE",
  authDomain: "swoo-5114e.firebaseapp.com",
  projectId: "swoo-5114e",
  storageBucket: "swoo-5114e.appspot.com",
  messagingSenderId: "795378078518",
  appId: "1:795378078518:web:b599cdc5e62a7ac27a5997",
  measurementId: "G-G9MDW2FJH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
async function Loginn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
      const user = userCredential.user;
      console.log("first",userCredential.user)
      return user;
  
  
    } catch (error) {
      console.log('loginerreur::',error)
    }
  }
  
  async function SignUp(name, email, password) {
    try {
      console.log("Signing up with email:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
  
  
  export { Loginn, SignUp };