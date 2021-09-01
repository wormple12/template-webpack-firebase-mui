import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// See SDKs for Firebase products that you want to use:
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDATp-oc4awN1bgsyTYlgI3_P2_hQUU_CY",
    authDomain: "wormple-test.firebaseapp.com",
    projectId: "wormple-test",
    storageBucket: "wormple-test.appspot.com",
    messagingSenderId: "708365944526",
    appId: "1:708365944526:web:c056a2de4104eb1a6bf29f",
    measurementId: "G-TR4L68EZGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);