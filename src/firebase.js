import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvmw0GbGVRMG7RprcC-KajC5S1nLskec4",
  authDomain: "whatsapp-clone-32d9b.firebaseapp.com",
  projectId: "whatsapp-clone-32d9b",
  storageBucket: "whatsapp-clone-32d9b.appspot.com",
  messagingSenderId: "133129566905",
  appId: "1:133129566905:web:e49f9e465e56ebb1797968",
  measurementId: "G-4G3HXGQGWJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;