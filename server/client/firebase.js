// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMHHe1fR_jDml7qokQS1e51iZa5FnlLOA",
  authDomain: "fooddeliveryapp-ba2b9.firebaseapp.com",
  projectId: "fooddeliveryapp-ba2b9",
  storageBucket: "fooddeliveryapp-ba2b9.appspot.com",
  messagingSenderId: "270159378499",
  appId: "1:270159378499:web:ea1466cad0f3caaf853cf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);

export { app, auth, storage };
