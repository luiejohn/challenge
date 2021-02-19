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
  console.log(userAuth.uid);
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

  return userRef;
};

//Initialize for new users
export const createUserWishlist = async (userAuth, additionalData) => {
  const userWishlist = firestore.doc(`wishlist/${userAuth.uid}`);
  const snapShot = await userWishlist.get();
  if (!snapShot.exists) {
    await userWishlist.set({
      id: snapShot.id,
      wishList: [],
    });
  }
};

export const getWishList = async (userId) => {
  const userWishlist = firestore.doc(`wishlist/${userId}`);
  const snapShot = await userWishlist.get();

  return snapShot.data();
};

export const addItemOnWishlist = async (userId, item) => {
  const userWishlist = firestore.doc(`wishlist/${userId}`);

  try {
    await userWishlist.update({
      wishList: firebase.firestore.FieldValue.arrayUnion(item),
    });
  } catch (error) {
    console.log("error adding wishlist " + error);
  }
};

export const removeIemOnWishList = async (userId, item) => {
  console.log(item);
  const userWishlist = firestore.doc(`wishlist/${userId}`);

  try {
    await userWishlist.update({
      wishList: firebase.firestore.FieldValue.arrayRemove(item),
    });
  } catch (error) {
    console.log("error removing wishlist " + error);
  }
};

export const checkWishList = async (userId, itemId) => {
  const data = await getWishList(userId);
  const res = data.wishList.find((item) => item.id === itemId);
  return res ? true : false;
};

// Use when setting initial data to firebase

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const convertCollectionDataToMap = (collections) => {
  let subCat = [];
  const transformCollection = collections.docs.map((doc) => {
    const newData = {
      ...doc.data(),
      id: doc.id,
    };

    subCat = [...subCat, ...doc.data().subCategory];

    return newData;
  });

  const uniqueSubCat = new Set(subCat);
  const mappedData = {
    subCategories: [...uniqueSubCat],
    dataCollection: transformCollection,
  };

  return mappedData;
};

export const getSingleItemData = async (category, itemId) => {
  const itemRef = firestore.doc(`${category}/${itemId}`);
  const snapShotData = await itemRef.get();
  const newData = {
    ...snapShotData.data(),
  };

  return newData;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
