import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
  REACT_APP_databaseURL,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
