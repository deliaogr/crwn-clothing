import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAj6RrYfm9YxU7AebH7FgFnm_BWfAz9QqM",
  authDomain: "crwn-clothing-69c65.firebaseapp.com",
  projectId: "crwn-clothing-69c65",
  storageBucket: "crwn-clothing-69c65.appspot.com",
  messagingSenderId: "385780607415",
  appId: "1:385780607415:web:6037d526f1a6d725666032",
  measurementId: "G-JNRJ5WLKWD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

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

export default firebase;
