import { combineReducers } from "redux";

import auth from "./auth-reducer";
import pets from "./pets-reducer";

export default combineReducers({
    auth, pets,
});