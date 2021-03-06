import React, { useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useSelector, useDispatch } from "react-redux";

import { fetchToken, fetchAnimals } from "../helpers/api-helpers";
import { isExpired } from "../reducers/auth-reducer";

import Buttons from "./Buttons";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: ${themeVars.tintedWhite};
`;

const Main = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const location = "Montreal, Quebec";
  const distance = 500;
  const type = "cat";
  const age = "young";

  const isTokenExpired = useSelector((state) =>
    isExpired(state.auth.expiresAt)
  );

  useEffect(() => {
    if (!accessToken || isTokenExpired) {
      fetchToken(dispatch);
    } else {
      fetchAnimals(dispatch, accessToken, location, distance, type, age);
    }
  }, [accessToken]);

  return (
    <Wrapper>
      <Buttons />
    </Wrapper>
  );
};

export default Main;
