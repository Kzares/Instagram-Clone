import {initializeApp, getApps, getApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBNAL7xf-4OwlhN_Qidnh2gTWcU6Xlvv_A",
    authDomain: "instagram-clone-9148f.firebaseapp.com",
    projectId: "instagram-clone-9148f",
    storageBucket: "instagram-clone-9148f.appspot.com",
    messagingSenderId: "967138019235",
    appId: "1:967138019235:web:153c9574ee1f99fb7c7c16"
  
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}