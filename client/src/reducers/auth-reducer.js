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
      let petAccessToken;
      if (action.token) {
        petAccessToken = action.token;
        sessionStorage.setItem("pet_access_token", action.token);
      } else {
        const token = sessionStorage.getItem("pet_access_token");
        if (token) {
          petAccessToken = token;
        }
      }
      return {
        ...state,
        token: petAccessToken,
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
