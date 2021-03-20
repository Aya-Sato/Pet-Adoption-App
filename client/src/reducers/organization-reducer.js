const initialState = {
  organization: null,
  organizationId: null,
  status: "idle",
};

export default function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ORGANIZATION": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ORGANIZATION": {
      let orgId;
      if (action.organizationId) {
        orgId = action.organizationId;
        sessionStorage.setItem("organization_id", action.organizationId);
      } else {
        const id = sessionStorage.getItem("organization_id");
        if (id) {
          orgId = id;
        }
      }
      return {
        ...state,
        organization: action.organization,
        organizationId: orgId,
        status: "idle",
      };
    }
    case "RECEIVE_ORGANIZATION_FAILED": {
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
