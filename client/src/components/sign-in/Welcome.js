import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { auth } from "./Authentication";

const Welcome = ({ currentUser, setCurrentUser }) => {
  const history = useHistory();

  return (
    <>
      <div>
        {currentUser === undefined
          ? "Welcome to Adopet!"
          : `Welcome to Adopet, ${currentUser}!`}
      </div>
      <button
        onClick={() => {
          auth.signOut();
          if (currentUser === undefined) {
            history.push("/");
          } else {
            setCurrentUser(null);
          }
        }}
      >
        SIGN OUT
      </button>
    </>
  );
};

export default Welcome;
