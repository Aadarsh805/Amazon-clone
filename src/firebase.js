import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYFTOoeoXcf_19nx_H510BtCm0GPXzdfo",
  authDomain: "clone-77d9e.firebaseapp.com",
  projectId: "clone-77d9e",
  storageBucket: "clone-77d9e.appspot.com",
  messagingSenderId: "635075389709",
  appId: "1:635075389709:web:4c61a8cdfecacd77cce844",
});

const auth = firebase.auth()

export { auth }