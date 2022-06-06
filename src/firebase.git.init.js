// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrnKylEXCv2gvloIJlR58vaogaqOconqw",
    authDomain: "task-mk-2.firebaseapp.com",
    projectId: "task-mk-2",
    storageBucket: "task-mk-2.appspot.com",
    messagingSenderId: "734508266935",
    appId: "1:734508266935:web:97591f781eef4383c2e432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth