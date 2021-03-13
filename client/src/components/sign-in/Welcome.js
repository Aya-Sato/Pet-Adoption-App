import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { auth } from "./Authentication";
import { removeCurrentUser } from "../../actions";

const Welcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <>
      <div>{`Welcome to Adopet, ${currentUser.name}!`}</div>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/");
          dispatch(removeCurrentUser());
        }}
      >
        SIGN OUT
      </button>
    </>
  );
};

export default Welcome;
