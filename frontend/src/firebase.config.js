import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3v4ZtfEt77l7ph-cMLSDnnjFwrTo4wpM",
  authDomain: "wetrack-ec3eb.firebaseapp.com",
  projectId: "wetrack-ec3eb",
  storageBucket: "wetrack-ec3eb.appspot.com",
  messagingSenderId: "218708230510",
  appId: "1:218708230510:web:8b0f1cac2c64558510817f",
  measurementId: "G-QNEW6QRYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app