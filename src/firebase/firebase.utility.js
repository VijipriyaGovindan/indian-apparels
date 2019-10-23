import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAnKisWaVliAU8k8oRVQ1q-bzKaamH6WAU",
  authDomain: "apparels-db.firebaseapp.com",
  databaseURL: "https://apparels-db.firebaseio.com",
  projectId: "apparels-db",
  storageBucket: "apparels-db.appspot.com",
  messagingSenderId: "961719574011",
  appId: "1:961719574011:web:1ed626fa8d1caa9ca53f5e"
}
// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
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
        ...additionalData

      })
    }
    catch (error) {
      console.log("error in user creation" + error.message);

    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create the google user login popup - by Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
