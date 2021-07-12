import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCyuBNyIrJgeUXad_hg3npSjbkFTQgb_NI",
    authDomain: "disneyplus-clone-9350d.firebaseapp.com",
    projectId: "disneyplus-clone-9350d",
    storageBucket: "disneyplus-clone-9350d.appspot.com",
    messagingSenderId: "866325829472",
    appId: "1:866325829472:web:d38ec34e8307f57a8e7005",
    measurementId: "G-0QR9FZ0WQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;