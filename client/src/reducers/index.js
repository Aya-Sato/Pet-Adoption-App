import { combineReducers } from "redux";

import auth from "./auth-reducer";
import pets from "./pets-reducer";
import pet from "./pet-reducer";
import currentUser from "./currentUser-reducer";
import organization from "./organization-reducer";
import messages from "./messages-reducer";

export default combineReducers({
  auth,
  pets,
  pet,
  currentUser,
  organization,
  messages,
});
