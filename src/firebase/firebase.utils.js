import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'crwn-db-7db18.firebaseapp.com',
  databaseURL: 'https://crwn-db-7db18.firebaseio.com',
  projectId: 'crwn-db-7db18',
  storageBucket: 'crwn-db-7db18.appspot.com',
  messagingSenderId: '752736088653',
  appId: '1:752736088653:web:556dd203424f5072efe204',
  measurementId: 'G-RF86258CR5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
