// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlJQTr9HWp2BKnBs9gEp2cuD24VIZcfq4",
  authDomain: "online-news-portal-bfd95.firebaseapp.com",
  projectId: "online-news-portal-bfd95",
  storageBucket: "online-news-portal-bfd95.appspot.com",
  messagingSenderId: "1027925558454",
  appId: "1:1027925558454:web:f41cee7e76316ad0965217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;