import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDHl5kKVGEM-7qtVknZ4jP2T3LZ1Rvj4_c",
    authDomain: "chat-cdb5a.firebaseapp.com",
    projectId: "chat-cdb5a",
    storageBucket: "chat-cdb5a.appspot.com",
    messagingSenderId: "392389648567",
    appId: "1:392389648567:web:e61dce27d10ff97ca06d32"
  }).auth();