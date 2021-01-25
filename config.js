import firebase from 'firebase'
require("@firebase/firestore")





// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDlnFE3l3MO-8fa3svFUXOb98PjbsALL9U",
  authDomain: "capp-72741.firebaseapp.com",
  databaseURL: "https://capp-72741-default-rtdb.firebaseio.com",
  projectId: "capp-72741",
  storageBucket: "capp-72741.appspot.com",
  messagingSenderId: "238559378200",
  appId: "1:238559378200:web:b23f3540c4882cde7b3c6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()