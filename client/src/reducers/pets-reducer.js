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
      if (state.liked.indexOf(action.likedPet) === -1) {
        return {
          ...state,
          liked: [...state.liked, action.likedPet],
        };
      }
    }
    case "RECEIVE_SUPERLIKED_PET": {
      if (state.superLiked.indexOf(action.superLikedPet) === -1) {
        return {
          ...state,
          superLiked: [...state.superLiked, action.superLikedPet],
        };
      }
    }
    case "RECEIVE_DISLIKED_PET": {
      if (state.disliked.indexOf(action.dislikedPet) === -1) {
        return {
          ...state,
          disliked: [...state.disliked, action.dislikedPet],
        };
      }
    }
    case "RECEIVE_SWIPED_PETS": {
      const filteredLikedPetsArr = action.likedPetsArr.filter(
        (petId) => state.liked.indexOf(petId) === -1
      );
      const filteredSuperLikedPetsArr = action.superLikedPetsArr.filter(
        (petId) => state.suerLiked.indexOf(petId) === -1
      );
      const filteredDislikedPetsArr = action.dislikedPetsArr.filter(
        (petId) => state.disliked.indexOf(petId) === -1
      );

      return {
        ...state,
        liked: [...state.liked, ...filteredLikedPetsArr],
        superLiked: [...state.superLiked, ...filteredSuperLikedPetsArr],
        disliked: [...state.disliked, ...filteredDislikedPetsArr],
      };
    }
    case "REMOVE_DISLIKED_PETS": {
      return {
        ...state,
        disliked: [],
      };
    }
    default: {
      return state;
    }
  }
}
