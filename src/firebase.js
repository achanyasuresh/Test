import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCOCvg3xpnrS4AJXA6Oq3nBPn6yvs1Thug",
    authDomain: "react-contact-51fe3.firebaseapp.com",
    projectId: "react-contact-51fe3",
    storageBucket: "react-contact-51fe3.appspot.com",
    messagingSenderId: "452224614656",
    appId: "1:452224614656:web:960cbce11118baab5a73e5"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();