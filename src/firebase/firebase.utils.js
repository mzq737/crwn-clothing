import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCJOnfdPh2h8PtlU5pmb4TZTW4TqzNv4CY",
  authDomain: "crwn-db-17f44.firebaseapp.com",
  projectId: "crwn-db-17f44",
  storageBucket: "crwn-db-17f44.appspot.com",
  messagingSenderId: "869091781864",
  appId: "1:869091781864:web:58cdefd48a0b614b4b6d5d",
  measurementId: "G-YGCQJGKL78"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;