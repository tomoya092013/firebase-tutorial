import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6p44YrEQdYxPjCKLHjkmvgjmjs92mEDg",
  authDomain: "fir-tutorial-31fc4.firebaseapp.com",
  projectId: "fir-tutorial-31fc4",
  storageBucket: "fir-tutorial-31fc4.appspot.com",
  messagingSenderId: "455379478411",
  appId: "1:455379478411:web:eb385208bb3115dd66f18e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;