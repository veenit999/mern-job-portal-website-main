// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCG8H5PhRd9IcLokcZELqUkYdARjg1rcf0",
  authDomain: "job-portal-4d6c7.firebaseapp.com",
  projectId: "job-portal-4d6c7",
  storageBucket: "job-portal-4d6c7.appspot.com",
  messagingSenderId: "112221512593",
  appId: "1:112221512593:web:b61f3a3bb77d0d85217030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;