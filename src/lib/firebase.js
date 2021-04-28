import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-8-4ZYpXroP4Jgr-rNkdJ9L5XkxjD6aQ',
  authDomain: 'insta-clone2-ac1f9.firebaseapp.com',
  projectId: 'insta-clone2-ac1f9',
  storageBucket: 'insta-clone2-ac1f9.appspot.com',
  messagingSenderId: '602608395232',
  appId: '1:602608395232:web:f3db3340e5cf2ddf4b0185'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase, FieldValue);

export { firebase, FieldValue };
