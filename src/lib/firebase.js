import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase, FieldValue);


export { firebase, FieldValue };


