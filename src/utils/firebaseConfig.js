// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTXVBW9wzqGiUjbSFQoNZLRaLW21yh_kM",
    authDomain: "ecommerce-rozado.firebaseapp.com",
    projectId: "ecommerce-rozado",
    storageBucket: "ecommerce-rozado.appspot.com",
    messagingSenderId: "207257547886",
    appId: "1:207257547886:web:41690004d178df57b5a27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore initialize
const database = getFirestore(app) 

export default database