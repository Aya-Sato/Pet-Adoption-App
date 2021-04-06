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

export const receiveLikedPet = (likedPet) => ({
  type: "RECEIVE_LIKED_PET",
  likedPet,
});

export const receiveSuperLikedPet = (superLikedPet) => ({
  type: "RECEIVE_SUPERLIKED_PET",
  superLikedPet,
});

export const receiveDislikedPet = (dislikedPet) => ({
  type: "RECEIVE_DISLIKED_PET",
  dislikedPet,
});

export const receiveSwipedPets = (
  likedPetsArr,
  superLikedPetsArr,
  dislikedPetsArr
) => ({
  type: "RECEIVE_SWIPED_PETS",
  likedPetsArr,
  superLikedPetsArr,
  dislikedPetsArr,
});

export const removeLikedPet = (unlikedPet) => ({
  type: "REMOVE_LIKED_PET",
  unlikedPet,
});

export const removeSuperLikedPet = (unSuperLikedPet) => ({
  type: "REMOVE_SUPERLIKED_PET",
  unSuperLikedPet,
});

export const removeDislikedPets = () => ({
  type: "REMOVE_DISLIKED_PETS",
});

export const receiveCurrentUser = (currentUser, userId) => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser,
  userId,
});

export const updateCurrentUser = (name, email) => ({
  type: "UPDATE_CURRENT_USER",
  name,
  email,
});

export const removeCurrentUser = () => ({
  type: "REMOVE_CURRENT_USER",
});

export const requestPet = () => ({
  type: "REQUEST_PET",
});

export const receivePet = (pet, petId) => ({
  type: "RECEIVE_PET",
  pet,
  petId,
});

export const receivePetFailed = () => ({
  type: "RECEIVE_PET_FAILED",
});

export const requestOrganization = () => ({
  type: "REQUEST_ORGANIZATION",
});

export const receiveOrganization = (organization, organizationId) => ({
  type: "RECEIVE_ORGANIZATION",
  organization,
  organizationId,
});

export const receiveOrganizationFailed = () => ({
  type: "RECEIVE_ORGANIZATION_FAILED",
});

export const requestMessages = () => ({
  type: "REQUEST_MESSAGES",
});

export const receiveMessages = (messages) => ({
  type: "RECEIVE_MESSAGES",
  messages,
});

export const receiveMessagesFailed = () => ({
  type: "RECEIVE_MESSAGES_FAILED",
});

export const removeMessage = (message) => ({
  type: "REMOVE_MESSAGE",
  message,
});
