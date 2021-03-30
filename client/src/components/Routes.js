import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import SignIn from "./sign-in/SignIn";
import SignInWithPhone from "./sign-in/SignInWithPhone";
import VerificationCode from "./sign-in/VerificationCode";
import PersonalInfo from "./sign-in/PersonalInfo";
import Welcome from "./sign-in/Welcome";
import Preference from "./preference/Preference";
import Header from "./Header";
import Main from "./main/Main";
import Pet from "./main/Pet";
import StripeContainer from "../components/application/StripeContainer";
import Confirmation from "../components/application/Confirmation";
import Organization from "./organization/Organization";
import Bookmark from "./bookmark/Bookmark";
import Message from "./Message";
import Settings from "./Settings";
import NotFound from "./NotFound";

const Routes = () => {
  const [codeResult, setCodeResult] = useState();
  return (
    <Switch>
      <Route exact path={["/", "/login"]}>
        <SignIn />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Route exact path="/sign-in-phone">
        <SignInWithPhone setCodeResult={setCodeResult} />
      </Route>
      <Route exact path="/verification-code">
        <VerificationCode codeResult={codeResult} />
      </Route>
      <PrivateRoute exact path="/personal-info">
        <PersonalInfo />
      </PrivateRoute>
      <PrivateRoute exact path="/welcome">
        <Welcome />
      </PrivateRoute>
      <PrivateRoute exact path="/preference">
        <Preference />
      </PrivateRoute>
      <PrivateRoute exact path="/main">
        <Header />
        <Main />
      </PrivateRoute>
      <PrivateRoute exact path="/pet/:petId">
        <Pet />
      </PrivateRoute>
      <PrivateRoute exact path="/submit-application">
        <StripeContainer />
      </PrivateRoute>
      <PrivateRoute exact path="/application-confirmation">
        <Confirmation />
      </PrivateRoute>
      <PrivateRoute exact path="/organization/:organizationId">
        <Organization />
      </PrivateRoute>
      <PrivateRoute exact path="/bookmark">
        <Header />
        <Bookmark />
      </PrivateRoute>
      <PrivateRoute exact path="/message">
        <Header />
        <Message />
      </PrivateRoute>
      <PrivateRoute exact path="/settings">
        <Header />
        <Settings />
      </PrivateRoute>
      <Route path="/">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
};

export default Routes;
