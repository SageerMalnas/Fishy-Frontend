
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyByCPuD3ALPpfbPuuerhFQobt4BLY5zsW0",
  authDomain: "fishy-2024.firebaseapp.com",
  projectId: "fishy-2024",
  storageBucket: "fishy-2024.appspot.com",
  messagingSenderId: "734496617424",
  appId: "1:734496617424:web:7f7aec5b522554e281bfd5",
  measurementId: "G-ERHEE0BRVB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);

export {app, firebase}

