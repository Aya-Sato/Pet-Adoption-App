import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
