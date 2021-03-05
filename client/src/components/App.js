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

import SignIn from "./SignIn";
import Preference from "./Preference";
import Header from "./Header";
import Main from "./Main";
import Bookmark from "./Bookmark";
import Message from "./Message";
import Settings from "./Settings";

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
                </Router>
        </div>
    );
}

export default App;
