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
        dispatch(receiveCurrentUser(snapshot.val(), userId));
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const addUserNameAndEmail = (userId, name, email) => {
  const updates = {};
  updates["/users/" + userId + "/name"] = name;
  updates["/users/" + userId + "/email"] = email;

  return firebase.database().ref().update(updates);
};

export const addPreference = (userId, preference) => {
  const updates = {};
  updates["/users/" + userId + "/preference"] = preference;

  return firebase.database().ref().update(updates);
};

export const addLikedPet = (userId, likedPetId) => {
  const updates = {};
  updates["/users/" + userId + "/liked/" + likedPetId] = likedPetId;

  return firebase.database().ref().update(updates);
};

export const addSuperLikedPet = (userId, superLikedPetId) => {
  const updates = {};
  updates[
    "/users/" + userId + "/superLiked/" + superLikedPetId
  ] = superLikedPetId;

  return firebase.database().ref().update(updates);
};

export const addDislikedPet = (userId, dislikedPetId) => {
  const updates = {};
  updates["/users/" + userId + "/disliked/" + dislikedPetId] = dislikedPetId;

  return firebase.database().ref().update(updates);
};

export const getPreference = (userId, preference, setPreference) => {
  firebase
    .database()
    .ref("users")
    .child(userId)
    .child("/preference")
    .get()
    .then(function (snapshot) {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setPreference({
          ...preference,
          type: data.type,
          age: data.age.toString(),
          location: data.location,
          distance: parseInt(data.distance),
          photo: data.photo,
        });
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
