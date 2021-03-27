const initialState = {
  pets: null,
  status: "idle",
  liked: [],
  superLiked: [],
  disliked: [],
};

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PETS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PETS": {
      if (
        state.liked.length > 0 ||
        state.superLiked.length > 0 ||
        state.disliked.length > 0
      ) {
        const alreadySwipedPets = [...state.liked]
          .concat([...state.superLiked])
          .concat([...state.disliked]);
        const filteredPets = action.pets.filter((pet) => {
          return alreadySwipedPets.indexOf(pet.id) === -1;
        });
        return {
          ...state,
          pets: filteredPets,
          status: "idle",
        };
      } else {
        return {
          ...state,
          pets: action.pets,
          status: "idle",
        };
      }
    }
    case "RECEIVE_PETS_FAILED": {
      return {
        ...state,
        status: "error",
      };
    }
    case "RECEIVE_LIKED_PET": {
      return {
        ...state,
        liked: [...state.liked, action.likedPet],
      };
    }
    case "RECEIVE_SUPERLIKED_PET": {
      return {
        ...state,
        superLiked: [...state.superLiked, action.superLikedPet],
      };
    }
    case "RECEIVE_DISLIKED_PET": {
      return {
        ...state,
        disliked: [...state.disliked, action.dislikedPet],
      };
    }
    case "RECEIVE_SWIPED_PETS": {
      return {
        ...state,
        liked: [...state.liked, ...action.likedPetsArr],
        superLiked: [...state.superLiked, ...action.superLikedPetsArr],
        disliked: [...state.disliked, ...action.dislikedPetsArr],
      };
    }
    case "REMOVE_SWIPED_PETS": {
      return {
        ...state,
        liked: [],
        superLiked: [],
        disliked: [],
      };
    }
    default: {
      return state;
    }
  }
}
