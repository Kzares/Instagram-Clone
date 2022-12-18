import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNAL7xf-4OwlhN_Qidnh2gTWcU6Xlvv_A",
  authDomain: "instagram-clone-9148f.firebaseapp.com",
  projectId: "instagram-clone-9148f",
  storageBucket: "instagram-clone-9148f.appspot.com",
  messagingSenderId: "967138019235",
  appId: "1:967138019235:web:153c9574ee1f99fb7c7c16"

};

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore()
const auth = app.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage, provider };