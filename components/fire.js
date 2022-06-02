import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB0GHmTC9LL-liB7Muz4YajNz3m4s5jExY",
  authDomain: "preferencematch.firebaseapp.com",
  projectId: "preferencematch",
  storageBucket: "preferencematch.appspot.com",
  messagingSenderId: "247299690638",
  appId: "1:247299690638:web:d0d1eb6a9ca6452564f9df"
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}