import React, { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    requestAccessToken, 
    receiveAccessToken, 
    receiveAccessTokenFailed
} from "../actions";

import LandingPage from "./LandingPage";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(requestAccessToken());
      fetch("/petfinder_access_token")
          .then((res) => res.json())
          .then((json) => {
              console.log(json);
              dispatch(receiveAccessToken(json.access_token));
          })
        .catch((err) => {
            console.error(err);
            dispatch(receiveAccessTokenFailed());
        });
  }, [])

  return (
      <div>
          <GlobalStyles />
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <LandingPage />
                      </Route>
                  </Switch>
              </Router>
      </div>
  );
}

export default App;
