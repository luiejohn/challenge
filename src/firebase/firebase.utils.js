import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiTlKdouqHbNnrUNFVzG_yJPq9QVRm6og",
  authDomain: "shopmate-db.firebaseapp.com",
  projectId: "shopmate-db",
  storageBucket: "shopmate-db.appspot.com",
  messagingSenderId: "338979489628",
  appId: "1:338979489628:web:d9ac95a3859fa193cea399",
  measurementId: "G-CZNWY83MEN",
};

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
      console.log("error creating user " + error);
    }
  }
  console.log(snapShot.exists);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
