const initialState = {
  pet: null,
  petId: null,
  status: "idle",
};

export default function petReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PET": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PET": {
      let selectedPetId;
      if (action.petId) {
        selectedPetId = action.petId;
        sessionStorage.setItem("selected_pet_id", action.petId);
      } else {
        const id = sessionStorage.getItem("selected_pet_id");
        if (id) {
          selectedPetId = id;
        }
      }
      return {
        ...state,
        pet: action.pet,
        petId: selectedPetId,
        status: "idle",
      };
    }
    case "RECEIVE_PET_FAILED": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
