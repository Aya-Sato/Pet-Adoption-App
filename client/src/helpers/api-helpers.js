import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenFailed,
  requestPets,
  receivePets,
  receivePetsFailed,
} from "../actions";

export function fetchToken(dispatch) {
  dispatch(requestAccessToken());
  fetch("/petfinder_access_token")
    .then((res) => res.json())
    .then((json) => {
      console.log(json, "token");
      dispatch(receiveAccessToken(json.access_token));
    })
    .catch((err) => {
      console.error(err);
      dispatch(receiveAccessTokenFailed());
    });
}

export function fetchAnimals(dispatch, token, location, distance, type, age) {
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
      const filteredPetsWithPhotos = pets.animals.filter((pet) => {
        return pet.photos.length > 0;
      });
      dispatch(receivePets(filteredPetsWithPhotos));
    })
    .catch((err) => {
      console.error(err);
      dispatch(receivePetsFailed());
    });
}
