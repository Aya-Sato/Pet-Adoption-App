import { combineReducers } from "redux";

import auth from "./auth-reducer";
import pets from "./pets-reducer";
import currentUser from "./currentUser-reducer";

export default combineReducers({
  auth,
  pets,
  currentUser,
});
