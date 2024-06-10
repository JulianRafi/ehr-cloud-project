// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore , disableNetwork, enableNetwork} from "firebase/firestore";
import { initializeFirestore, CACHE_SIZE_UNLIMITED, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
// import { AppRegistry } from 'react-native';
// import database from '@react-native-firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVSMD_oQcD5Tq2SZbUGqY0cX363VCzJKk",
  authDomain: "ehr-cloud-project.firebaseapp.com",
  databaseURL: "https://ehr-cloud-project-default-rtdb.firebaseio.com",
  projectId: "ehr-cloud-project",
  storageBucket: "ehr-cloud-project.appspot.com",
  messagingSenderId: "268375128319",
  appId: "1:268375128319:web:212d0f9ae4ff92a81f74ca",
  measurementId: "G-J80FLZH2DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const auth = getAuth();
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({cacheSizeBytes: CACHE_SIZE_UNLIMITED})
});
export const storage = getStorage(app);


