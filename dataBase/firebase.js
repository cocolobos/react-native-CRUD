import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGbwD5FtuZ5kModsbM7kGTr5R5UyObGag",
  authDomain: "react-native-crud-4750d.firebaseapp.com",
  projectId: "react-native-crud-4750d",
  storageBucket: "react-native-crud-4750d.appspot.com",
  messagingSenderId: "440093533093",
  appId: "1:440093533093:web:2fe399a5a3ed425c247e4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
  firebase,
  db,
}