// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5UmDOB1fe1YoGUXQyV5ArRvaNrcFLIaw',
  authDomain: 'todolistjavascript.firebaseapp.com',
  databaseURL:
    'https://todolistjavascript-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todolistjavascript',
  storageBucket: 'todolistjavascript.appspot.com',
  messagingSenderId: '975315041313',
  appId: '1:975315041313:web:0a15db948558cb73bff760',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
