const initialState = {
  status: "idle",
  messages: null,
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_MESSAGES": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_MESSAGES": {
      return {
        ...state,
        status: "idle",
        messages: action.messages,
      };
    }
    case "RECEIVE_MESSAGES_FAILED": {
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
