const initialState = {
  token: null,
  status: "idle",
  expiresAt: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ACCESS_TOKEN": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ACCESS_TOKEN": {
      return {
        ...state,
        token: action.token,
        expiresAt: Date.now() + 3600,
        status: "idle",
      };
    }
    case "RECEIVE_ACCESS_TOKEN_FAILED": {
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

export const isExpired = (expirationDate) => expirationDate <= Date.now();
