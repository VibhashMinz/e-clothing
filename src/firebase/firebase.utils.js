import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvTs_ld0diuY_mv7e-llRC-tlzx-xpYio",
  authDomain: "crown-db-da42e.firebaseapp.com",
  databaseURL: "https://crown-db-da42e.firebaseio.com",
  projectId: "crown-db-da42e",
  storageBucket: "crown-db-da42e.appspot.com",
  messagingSenderId: "776234374871",
  appId: "1:776234374871:web:cb89eaae8c5b504e018292",
  measurementId: "G-YT4G7M6E7E",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
