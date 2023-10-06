// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpyexB0oleN_rVIGyOxqFQR34Z5ciXna4",
    authDomain: "shehab-portfolio-92c78.firebaseapp.com",
    projectId: "shehab-portfolio-92c78",
    storageBucket: "shehab-portfolio-92c78.appspot.com",
    messagingSenderId: "285250642439",
    appId: "1:285250642439:web:88ed9b6e1c30fa4c3540a2",
    measurementId: "G-VRXZGL2NGD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }