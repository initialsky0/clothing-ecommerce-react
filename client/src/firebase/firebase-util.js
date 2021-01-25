import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyBhGmIJkMxKssnNVKno6GdCvSRoRGWNmXg",
   authDomain: "clothing-ecom-db.firebaseapp.com",
   projectId: "clothing-ecom-db",
   storageBucket: "clothing-ecom-db.appspot.com",
   messagingSenderId: "757959487259",
   appId: "1:757959487259:web:3fae6f4188cb2c17482dbe",
   measurementId: "G-VNKMBWHQYV"
};

/* ------------------------------------FUNCTIONS---------------------------------------- */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Function to create user account
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      })
    } catch (error) {
      return console.error(error);
    }
  }

  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objsToAdd) => {
  // Coded to add collection to firebase database

  const collectionRef = firestore.collection(collectionKey);

  // firebase can only set one at a time, so create a batch 
  // for the collection to be sent in case connection is interrupted.
  const batch = firestore.batch();

  objsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  // Mimic promise based authentication
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
    }, reject);
  });
}

/* ------------------------------------SETUP---------------------------------------- */

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;