import firebase from "../components/sign-in/Authentication";

import { receiveCurrentUser, receiveSwipedPets } from "../actions";

export const createUser = (userInfo) => {
  const { userId, name, email, phone, userPhoto } = userInfo;
  const userRef = firebase.database().ref("users/" + userId);
  const user = {
    name,
    email,
    phone,
    userPhoto,
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

export const createPreference = (userId, preference) => {
  const userRef = firebase
    .database()
    .ref("preferences/" + userId + "/preference");
  const userPreference = preference;

  userRef.set(userPreference);
};

export const addLikedPet = (userId, likedPet) => {
  const updates = {};
  updates["/preferences/" + userId + "/liked/" + likedPet.id] = likedPet;

  return firebase.database().ref().update(updates);
};

export const addSuperLikedPet = (userId, superLikedPet) => {
  const updates = {};
  updates[
    "/preferences/" + userId + "/superLiked/" + superLikedPet.id
  ] = superLikedPet;

  return firebase.database().ref().update(updates);
};

export const addDislikedPet = (userId, dislikedPet) => {
  const updates = {};
  updates[
    "/preferences/" + userId + "/disliked/" + dislikedPet.id
  ] = dislikedPet;

  return firebase.database().ref().update(updates);
};

export const getPreference = (userId, preference, setPreference) => {
  firebase
    .database()
    .ref("preferences")
    .child(userId)
    .child("preference")
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

export const getSwipedPets = (dispatch, userId) => {
  firebase
    .database()
    .ref("preferences")
    .child(userId)
    .get()
    .then(function (snapshot) {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const liked = data.liked && data.liked;
        const superLiked = data.superLiked && data.superLiked;
        const disliked = data.disliked && data.disliked;

        const likedPetsArr = liked ? Object.values(liked) : [];
        const superLikedPetsArr = superLiked ? Object.values(superLiked) : [];
        const dislikedPetsArr = disliked ? Object.values(disliked) : [];

        dispatch(
          receiveSwipedPets(likedPetsArr, superLikedPetsArr, dislikedPetsArr)
        );
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteDislikedPets = (userId) => {
  firebase
    .database()
    .ref("/preferences/" + userId + "/disliked")
    .remove();
};
