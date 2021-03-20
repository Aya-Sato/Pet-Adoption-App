const initialState = {
  currentUser: null,
  currentUserId: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_CURRENT_USER": {
      let currentUserId;
      if (action.userId) {
        currentUserId = action.userId;
        sessionStorage.setItem("current_user_id", action.userId);
      } else {
        const id = sessionStorage.getItem("current_user_id");
        if (id) {
          currentUserId = id;
        }
      }
      return {
        ...state,
        currentUser: action.currentUser,
        currentUserId: currentUserId,
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
