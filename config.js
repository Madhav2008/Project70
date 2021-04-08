import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCwh7cxMfkGCiCyAVAaLIVU5Qf4AZnY5uY",
  authDomain: "silicon-valley-game-85a40.firebaseapp.com",
  databaseURL: "https://silicon-valley-game-85a40-default-rtdb.firebaseio.com",
  projectId: "silicon-valley-game-85a40",
  storageBucket: "silicon-valley-game-85a40.appspot.com",
  messagingSenderId: "559476894292",
  appId: "1:559476894292:web:50564fe3b6a97cfb11dbc1"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();