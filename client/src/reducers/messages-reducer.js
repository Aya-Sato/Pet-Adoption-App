import produce from "immer";

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
    case "REMOVE_MESSAGE": {
      const orgId = action.message.orgId;
      const filteredMessageArr = state.messages[orgId].filter((message) => {
        return message.id !== action.message.id;
      });

      if (filteredMessageArr.length === 0) {
        const newState = produce(state, (draftState) => {
          delete draftState.messages[orgId];
        });
        return newState;
      } else {
        return {
          ...state,
          messages: {
            ...state.messages,
            [orgId]: filteredMessageArr,
          },
        };
      }
    }
    default: {
      return state;
    }
  }
}
