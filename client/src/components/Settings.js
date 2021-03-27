import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { auth } from "../components/sign-in/Authentication";
import { removeCurrentUser } from "../actions";
import { PreferenceContext } from "./preference/PreferenceContext";

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
  const { setPreference } = useContext(PreferenceContext);

  return (
    <Wrapper>
      <LogOutBtn
        onClick={() => {
          setPreference({});
          auth.signOut();
          history.push("/");
          dispatch(removeCurrentUser());
          sessionStorage.clear();
        }}
      >
        Log out
      </LogOutBtn>
    </Wrapper>
  );
};

export default Settings;
