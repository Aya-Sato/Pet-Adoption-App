import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenFailed,
  requestPets,
  receivePets,
  receivePetsFailed,
  requestPet,
  receivePet,
  receivePetFailed,
} from "../actions";

export function fetchToken(dispatch) {
  dispatch(requestAccessToken());
  fetch("/petfinder_access_token")
    .then((res) => res.json())
    .then((json) => {
      dispatch(receiveAccessToken(json.access_token));
    })
    .catch((err) => {
      console.error(err);
      dispatch(receiveAccessTokenFailed());
    });
}

export function fetchAnimals(dispatch, token, preference) {
  const { type, age, location, distance, photo } = preference;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.petfinder.com/v2/animals?type=${type}&age=${age}&location=${location}&distance=${distance}&limit=100`;

  dispatch(requestPets());
  return fetch(url, options)
    .then((res) => res.json())
    .then((pets) => {
      if (photo) {
        dispatch(receivePets(pets.animals));
      } else {
        const filteredPetsWithPhotos = pets.animals.filter((pet) => {
          return pet.photos.length > 0;
        });
        dispatch(receivePets(filteredPetsWithPhotos));
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(receivePetsFailed());
    });
}

export function fetchAnimal(dispatch, token, petId) {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.petfinder.com/v2/animals/${petId}`;

  dispatch(requestPet());
  return fetch(url, options)
    .then((res) => res.json())
    .then((pet) => {
      dispatch(receivePet(pet.animal, petId));
    })
    .catch((err) => {
      console.error(err);
      dispatch(receivePetFailed());
    });
}
