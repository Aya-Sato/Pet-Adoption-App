const initialState = {
  currentUser: null,
  currentUserId: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_CURRENT_USER": {
      return {
        ...state,
        currentUser: action.currentUser,
        currentUserId: action.userId,
      };
    }
    case "UPDATE_CURRENT_USER": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          name: action.name,
          email: action.email,
        },
      };
    }
    case "REMOVE_CURRENT_USER": {
      return {
        ...state,
        currentUser: null,
        currentUserId: null,
      };
    }
    default: {
      return state;
    }
  }
}
