const initialState = {
  currentUser: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_CURRENT_USER": {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case "REMOVE_CURRENT_USER": {
      return {
        ...state,
        currentUser: null,
      };
    }
    default: {
      return state;
    }
  }
}
