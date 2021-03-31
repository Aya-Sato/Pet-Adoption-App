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
        const alreadySwipedPetIdsArr = alreadySwipedPets.map((pet) => {
          return pet.id;
        });
        const filteredPets = action.pets.filter((pet) => {
          return alreadySwipedPetIdsArr.indexOf(pet.id) === -1;
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
      const likedPetIdsArr = state.liked.map((pet) => {
        return pet.id;
      });
      if (
        likedPetIdsArr.length === 0 ||
        likedPetIdsArr.indexOf(action.likedPet.id) === -1
      ) {
        return {
          ...state,
          liked: [...state.liked, action.likedPet],
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case "RECEIVE_SUPERLIKED_PET": {
      const superLikedPetIdsArr = state.superLiked.map((pet) => {
        return pet.id;
      });
      if (
        superLikedPetIdsArr.length === 0 ||
        superLikedPetIdsArr.indexOf(action.superLikedPet.id) === -1
      ) {
        return {
          ...state,
          superLiked: [...state.superLiked, action.superLikedPet],
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case "RECEIVE_DISLIKED_PET": {
      const dislikedPetIdsArr = state.disliked.map((pet) => {
        return pet.id;
      });
      if (
        dislikedPetIdsArr.length === 0 ||
        dislikedPetIdsArr.indexOf(action.dislikedPet.id) === -1
      ) {
        return {
          ...state,
          disliked: [...state.disliked, action.dislikedPet],
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case "RECEIVE_SWIPED_PETS": {
      const likedPetIdsArr = state.liked.map((pet) => {
        return pet.id;
      });
      const superLikedPetIdsArr = state.superLiked.map((pet) => {
        return pet.id;
      });
      const dislikedPetIdsArr = state.disliked.map((pet) => {
        return pet.id;
      });
      const filteredLikedPetsArr = action.likedPetsArr.filter(
        (pet) => likedPetIdsArr.indexOf(pet.id) === -1
      );
      const filteredSuperLikedPetsArr = action.superLikedPetsArr.filter(
        (pet) => superLikedPetIdsArr.indexOf(pet.id) === -1
      );
      const filteredDislikedPetsArr = action.dislikedPetsArr.filter(
        (pet) => dislikedPetIdsArr.indexOf(pet.id) === -1
      );

      return {
        ...state,
        liked: [...state.liked, ...filteredLikedPetsArr],
        superLiked: [...state.superLiked, ...filteredSuperLikedPetsArr],
        disliked: [...state.disliked, ...filteredDislikedPetsArr],
      };
    }
    case "REMOVE_LIKED_PET": {
      const likedPetIdsArr = state.liked.map((pet) => {
        return pet.id;
      });
      const index = likedPetIdsArr.indexOf(action.unlikedPet.id);
      let newArr = [...state.liked];
      if (index > -1) {
        newArr.splice(index, 1);
      }
      return {
        ...state,
        liked: newArr,
      };
    }
    case "REMOVE_SUPERLIKED_PET": {
      const superLikedPetIdsArr = state.superLiked.map((pet) => {
        return pet.id;
      });
      const index = superLikedPetIdsArr.indexOf(action.unSuperLikedPet.id);
      let newArr = [...state.superLiked];
      if (index > -1) {
        newArr.splice(index, 1);
      }
      return {
        ...state,
        superLiked: newArr,
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
