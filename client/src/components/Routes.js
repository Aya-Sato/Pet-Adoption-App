import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Preference from "./Preference";
import Header from "./Header";
import Main from "./Main";
import Bookmark from "./Bookmark";
import Message from "./Message";
import Settings from "./Settings";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/preference">
        <Preference />
      </Route>
      <Route exact path="/main">
        <Header />
        <Main />
      </Route>
      <Route exact path="/bookmark">
        <Header />
        <Bookmark />
      </Route>
      <Route exact path="/message">
        <Header />
        <Message />
      </Route>
      <Route exact path="/settings">
        <Header />
        <Settings />
      </Route>
    </Switch>
  );
};

export default Routes;
