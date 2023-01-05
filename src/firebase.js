// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIUyf7oFhA2mYebls_3fKVXjlhh-W8WVU",
  authDomain: "yebe-adc08.firebaseapp.com",
  projectId: "yebe-adc08",
  storageBucket: "yebe-adc08.appspot.com",
  messagingSenderId: "964895265536",
  appId: "1:964895265536:web:1a98fa0d32080aae4019e5",
  measurementId: "G-L52H2DXDMG",
  databaseURL: "yebe-adc08-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const analytics = getAnalytics(app);

export default app;
