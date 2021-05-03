import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXfx1pu2CpIZwXguh4RuovpUu3A9dXotU",
  authDomain: "insta-clone-3.firebaseapp.com",
  projectId: "insta-clone-3",
  storageBucket: "insta-clone-3.appspot.com",
  messagingSenderId: "519277781591",
  appId: "1:519277781591:web:04b0c813886ba3683bb912"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase, FieldValue);


export { firebase, FieldValue };


