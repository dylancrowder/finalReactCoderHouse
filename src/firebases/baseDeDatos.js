// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0pq8WrL85C884x2nFQ-o77q-jXqNlh1Q",
    authDomain: "pleyadian-2019a.firebaseapp.com",
    projectId: "pleyadian-2019a",
    storageBucket: "pleyadian-2019a.appspot.com",
    messagingSenderId: "649474842090",
    appId: "1:649474842090:web:c9bcf21b8264dae89ca693"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)