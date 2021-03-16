import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { auth } from "../components/sign-in/Authentication";
import { removeCurrentUser } from "../actions";

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
  position: absolute;
  top: 100px;
`;

const LogOutBtn = styled.button``;

const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <LogOutBtn
        onClick={() => {
          auth.signOut();
          history.push("/");
          dispatch(removeCurrentUser());
        }}
      >
        Log out
      </LogOutBtn>
    </Wrapper>
  );
};

export default Settings;
