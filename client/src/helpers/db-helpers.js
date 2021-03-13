import firebase from "../components/sign-in/Authentication";

import { receiveCurrentUser } from "../actions";

export const createUser = (userInfo) => {
  const { userId, name, email, phone } = userInfo;
  const userRef = firebase.database().ref("users/" + userId);
  const user = {
    name,
    email,
    phone,
  };

  userRef.set(user);
};

export const getUser = (dispatch, userId) => {
  firebase
    .database()
    .ref("users")
    .child(userId)
    .get()
    .then(function (snapshot) {
      if (snapshot.exists()) {
        dispatch(receiveCurrentUser(snapshot.val()));
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};