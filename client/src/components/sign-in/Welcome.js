import React from "react";
import styled from "styled-components";

import { auth } from "./Authentication";

const Welcome = ({ currentUser, setCurrentUser }) => {
  return (
    <>
      <div>
        {currentUser === null
          ? "Welcome to Adopet!"
          : `Welcome to Adopet, ${currentUser}!`}
      </div>
      <button
        onClick={() => {
          auth.signOut();
          setCurrentUser(null);
        }}
      >
        SIGN OUT
      </button>
    </>
  );
};

export default Welcome;
