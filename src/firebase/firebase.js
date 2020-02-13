import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCL1LOhpt_hpfhUgTKCCD_ZGtQ7REyH5y8",
  authDomain: "todo-app-45efc.firebaseapp.com",
  databaseURL: "https://todo-app-45efc.firebaseio.com",
  projectId: "todo-app-45efc",
  storageBucket: "todo-app-45efc.appspot.com",
  messagingSenderId: "985853056496",
  appId: "1:985853056496:web:b87eba3276d80df8d27935",
  measurementId: "G-B7ZJ3DKH3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('noteData/');