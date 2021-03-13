export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenFailed = () => ({
  type: "RECEIVE_ACCESS_TOKEN_FAILED",
});

export const requestPets = () => ({
  type: "REQUEST_PETS",
});

export const receivePets = (pets) => ({
  type: "RECEIVE_PETS",
  pets,
});

export const receivePetsFailed = () => ({
  type: "RECEIVE_PETS_FAILED",
});

export const receiveCurrentUser = (currentUser) => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser,
});

export const removeCurrentUser = () => ({
  type: "REMOVE_CURRENT_USER",
});
