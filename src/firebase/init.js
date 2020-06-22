import firebase from "firebase";
// Your web app's Firebase configuration
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "mck-first-test.firebaseapp.com",
  databaseURL: "https://mck-first-test.firebaseio.com",
  projectId: "mck-first-test",
  storageBucket: "mck-first-test.appspot.com",
  messagingSenderId: "672693529911",
  appId: "1:672693529911:web:eae00b5173e102a3b07eb2",
  measurementId: "G-TM8X1G63HW",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
