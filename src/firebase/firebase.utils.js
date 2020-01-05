import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCAoFpfyjstbkxtkl4lQK_x97Wtqv87BVI",
  authDomain: "crwn-db-c194d.firebaseapp.com",
  databaseURL: "https://crwn-db-c194d.firebaseio.com",
  projectId: "crwn-db-c194d",
  storageBucket: "crwn-db-c194d.appspot.com",
  messagingSenderId: "1042295866504",
  appId: "1:1042295866504:web:09dce525d115ca2270cb3d",
  measurementId: "G-P4K0EDFG31"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
