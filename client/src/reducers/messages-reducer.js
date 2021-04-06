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
      const timeStamp = action.message.time;
      const filteredMessageArr = state.messages[
        action.message.recipient
      ].filter((message) => {
        return message.time !== timeStamp;
      });
      console.log(filteredMessageArr.length, "filtered");

      if (filteredMessageArr.length === 0) {
        const newState = produce(state, (draftState) => {
          delete draftState.messages[action.message.recipient];
        });
        return newState;
      } else {
        return {
          ...state,
          messages: {
            ...state.messages,
            [action.message.recipient]: filteredMessageArr,
          },
        };
      }
    }
    default: {
      return state;
    }
  }
}
