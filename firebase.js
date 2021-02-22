import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDsFWCFwBeZeVUe9dyV2_XIvXfhLyyipeE",
  authDomain: "whatsap-88126.firebaseapp.com",
  projectId: "whatsap-88126",
  storageBucket: "whatsap-88126.appspot.com",
  messagingSenderId: "134163958443",
  appId: "1:134163958443:web:0a1894554c93e51b8485ee",
  measurementId: "G-6VMRTV2KEB"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
