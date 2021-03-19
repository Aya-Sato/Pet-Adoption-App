import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./sign-in/SignIn";
import SignInWithPhone from "./sign-in/SignInWithPhone";
import VerificationCode from "./sign-in/VerificationCode";
import PersonalInfo from "./sign-in/PersonalInfo";
import Welcome from "./sign-in/Welcome";
import Preference from "./preference/Preference";
import Header from "./Header";
import Main from "./main/Main";
import Pet from "./main/Pet";
import Bookmark from "./Bookmark";
import Message from "./Message";
import Settings from "./Settings";

const Routes = () => {
  const [codeResult, setCodeResult] = useState();
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/sign-in-phone">
        <SignInWithPhone setCodeResult={setCodeResult} />
      </Route>
      <Route exact path="/verification-code">
        <VerificationCode codeResult={codeResult} />
      </Route>
      <Route exact path="/personal-info">
        <PersonalInfo />
      </Route>
      <Route exact path="/welcome">
        <Welcome />
      </Route>
      <Route exact path="/preference">
        <Preference />
      </Route>
      <Route exact path="/main">
        <Header />
        <Main />
      </Route>
      <Route exact path="/pet/:petId">
        <Pet />
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
