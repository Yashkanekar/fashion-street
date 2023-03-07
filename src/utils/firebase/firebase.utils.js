// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIFoU4DjQYNseOTYtov-FzsDvZbEoPKfU",
  authDomain: "fashion-street-db.firebaseapp.com",
  projectId: "fashion-street-db",
  storageBucket: "fashion-street-db.appspot.com",
  messagingSenderId: "722674903650",
  appId: "1:722674903650:web:2b90343e434d151356ff3b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//create a db instance of firestore db
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); //takes in the database, the collection and the unique document identifier

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("An error occured while creating the user", error.message);
    }
  }

  return userDocRef;
};
